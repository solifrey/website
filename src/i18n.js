// Internationalization module
class I18n {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'en';
    this.translations = {};
    this.init();
  }

  async init() {
    try {
      // Load translations
      const enResponse = await fetch('/src/locales/en.json');
      const deResponse = await fetch('/src/locales/de.json');
      
      this.translations.en = await enResponse.json();
      this.translations.de = await deResponse.json();
      
      // Apply current language
      this.setLanguage(this.currentLanguage);
    } catch (error) {
      console.error('Failed to load translations:', error);
      // Fallback to English
      this.setLanguage('en');
    }
  }

  setLanguage(lang) {
    if (!this.translations[lang]) {
      console.warn(`Language ${lang} not found, falling back to English`);
      lang = 'en';
    }
    
    this.currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Update page title and meta description
    this.updateMetaTags();
    
    // Update all translatable elements
    this.updateElements();
    
    // Update navigation
    this.updateNavigation();
    
    // Trigger custom event for components to react
    document.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: lang, translations: this.translations[lang] }
    }));
  }

  updateMetaTags() {
    const t = this.translations[this.currentLanguage];
    if (t && t.meta) {
      document.title = t.meta.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', t.meta.description);
      }
      
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', t.meta.keywords);
      }
    }
  }

  updateElements() {
    const t = this.translations[this.currentLanguage];
    if (!t) return;

    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const value = this.getNestedValue(t, key);
      if (value !== undefined) {
        if (element.tagName === 'INPUT' && element.type === 'submit') {
          element.value = value;
        } else if (element.tagName === 'INPUT' && element.type === 'text' || element.tagName === 'TEXTAREA') {
          element.placeholder = value;
        } else {
          // Use innerHTML for trusted content from our JSON files
          // This allows proper display of & symbols without double-encoding
          element.innerHTML = value;
        }
      }
    });

    // Update elements with data-i18n-html attribute (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      const value = this.getNestedValue(t, key);
      if (value !== undefined) {
        element.innerHTML = value.replace(/\n/g, '<br>');
      }
    });
  }

  updateNavigation() {
    const t = this.translations[this.currentLanguage];
    if (!t || !t.navigation) return;

    // Update navigation items
    Object.keys(t.navigation).forEach(key => {
      const elements = document.querySelectorAll(`[data-nav="${key}"]`);
      elements.forEach(element => {
        element.innerHTML = t.navigation[key];
      });
    });
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
  }

  t(key) {
    return this.getNestedValue(this.translations[this.currentLanguage], key) || key;
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  getTranslations() {
    return this.translations[this.currentLanguage];
  }
}

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18n();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18n;
}
