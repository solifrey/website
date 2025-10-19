// Main JavaScript functionality
class WebsiteApp {
  constructor() {
    this.rateLimiter = null;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializeTheme();
    this.setupSmoothScrolling();
    this.setupFormHandling();
    this.setupCVDownload();
    this.setupAnalytics();
    this.setupSecurity();
    this.setupCredibilityBar();
  }

  setupSecurity() {
    // Initialize rate limiting
    if (window.securityManager) {
      this.rateLimiter = window.securityManager.setupRateLimit();
    }
  }

  setupEventListeners() {
    // Language toggle
    document.addEventListener('click', (e) => {
      if (e.target.matches('.language-toggle__button')) {
        const language = e.target.dataset.lang;
        if (window.i18n) {
          window.i18n.setLanguage(language);
        }
      }
    });

    // Theme toggle
    document.addEventListener('click', (e) => {
      if (e.target.matches('.theme-toggle')) {
        this.toggleTheme();
      }
    });

    // Modal handling
    document.addEventListener('click', (e) => {
      if (e.target.matches('.modal__close') || e.target.matches('.modal')) {
        this.closeModal();
      }
    });

    // Escape key to close modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });

    // Back to top button
    document.addEventListener('click', (e) => {
      if (e.target.matches('.back-to-top')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // Scroll to show back to top button
    window.addEventListener('scroll', this.throttle(() => {
      this.toggleBackToTopButton();
    }, 100));
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update theme toggle button
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  setupSmoothScrolling() {
    // Handle anchor links
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  }

  setupFormHandling() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleContactForm(contactForm);
      });
    }
  }

  async handleContactForm(form) {
    // Rate limiting check
    if (this.rateLimiter && !this.rateLimiter('contact-form')) {
      this.showMessage('Too many submissions. Please wait before trying again.', 'error');
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Sanitize form data
    const sanitizedData = this.sanitizeFormData(data);
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = window.i18n ? window.i18n.t('common.loading') : 'Sending...';
    submitButton.disabled = true;

    try {
      // Simulate form submission (replace with actual endpoint)
      await this.simulateFormSubmission(sanitizedData);
      
      // Show success message
      this.showMessage(
        window.i18n ? window.i18n.t('contact.form.success') : 'Thank you! Your message has been sent.',
        'success'
      );
      
      // Reset form
      form.reset();
      
    } catch (error) {
      // Show error message
      this.showMessage(
        window.i18n ? window.i18n.t('contact.form.error') : 'Sorry, there was an error sending your message.',
        'error'
      );
    } finally {
      // Reset button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  }

  sanitizeFormData(data) {
    const sanitized = {};
    for (const [key, value] of Object.entries(data)) {
      // Basic sanitization - remove potentially dangerous content
      sanitized[key] = String(value)
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '')
        .trim()
        .substring(0, 10000); // Limit length
    }
    return sanitized;
  }

  async simulateFormSubmission(data) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate occasional failure
    if (Math.random() < 0.1) {
      throw new Error('Simulated network error');
    }
    
    console.log('Form submission:', data);
  }

  setupCVDownload() {
    const cvForm = document.getElementById('cv-download-form');
    if (cvForm) {
      cvForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleCVDownload(cvForm);
      });
    }
  }

  handleCVDownload(form) {
    // Rate limiting for CV download attempts
    if (this.rateLimiter && !this.rateLimiter('cv-download')) {
      this.showMessage('Too many download attempts. Please wait before trying again.', 'error');
      return;
    }

    const passwordInput = form.querySelector('input[type="password"]');
    const password = passwordInput.value;
    
    // Basic password validation
    if (!password || password.length < 6 || password.length > 128) {
      this.showCVError(form, 'Invalid password format');
      return;
    }

    const correctPassword = window.CONFIG ? window.CONFIG.cvPassword : 'complexity2025';
    
    // Use secure comparison to prevent timing attacks
    if (this.secureCompare(password, correctPassword)) {
      // Create download link
      const link = document.createElement('a');
      link.href = '/public/cv/cv.pdf'; // Update path to actual CV file
      link.download = 'CV.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clear password field
      passwordInput.value = '';
      
      // Close modal
      this.closeModal();
      
      // Show success message
      this.showMessage('CV downloaded successfully!', 'success');
    } else {
      // Show error message
      this.showCVError(form, window.i18n ? window.i18n.t('cv.download.error') : 'Incorrect password. Please try again.');
    }
  }

  showCVError(form, message) {
    const errorElement = form.querySelector('.error-message');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
    
    // Clear password field
    const passwordInput = form.querySelector('input[type="password"]');
    if (passwordInput) {
      passwordInput.value = '';
      passwordInput.focus();
    }
  }

  // Secure string comparison to prevent timing attacks
  secureCompare(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    
    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    
    return result === 0;
  }

  showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Focus first input
      const firstInput = modal.querySelector('input, textarea, button');
      if (firstInput) {
        firstInput.focus();
      }
    }
  }

  closeModal() {
    const activeModal = document.querySelector('.modal.active');
    if (activeModal) {
      activeModal.classList.remove('active');
      document.body.style.overflow = '';
      
      // Clear form errors
      const errorMessages = activeModal.querySelectorAll('.error-message');
      errorMessages.forEach(error => {
        error.style.display = 'none';
        error.textContent = '';
      });
    }
  }

  showMessage(message, type = 'info') {
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `message message--${type}`;
    messageEl.textContent = message;
    
    // Style the message
    Object.assign(messageEl.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '1rem 1.5rem',
      borderRadius: '8px',
      color: 'white',
      fontWeight: '500',
      zIndex: '3000',
      maxWidth: '400px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease'
    });
    
    // Set background color based on type
    const colors = {
      success: '#5cb85c',
      error: '#d9534f',
      info: '#5bc0de',
      warning: '#f0ad4e'
    };
    messageEl.style.backgroundColor = colors[type] || colors.info;
    
    // Add to page
    document.body.appendChild(messageEl);
    
    // Animate in
    setTimeout(() => {
      messageEl.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
      messageEl.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (messageEl.parentNode) {
          messageEl.parentNode.removeChild(messageEl);
        }
      }, 300);
    }, 4000);
  }

  toggleBackToTopButton() {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      if (window.scrollY > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    }
  }

  setupAnalytics() {
    // Initialize Plausible Analytics if enabled
    if (window.CONFIG && window.CONFIG.analytics.plausible.enabled) {
      const script = document.createElement('script');
      script.defer = true;
      script.dataset.domain = window.CONFIG.analytics.plausible.domain;
      script.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(script);
    }
  }

  setupCredibilityBar() {
    const credibilityBar = document.querySelector('.credibility-bar');
    if (!credibilityBar) return;

    const proofPoints = credibilityBar.querySelectorAll('.credibility-bar__proof-point');
    if (proofPoints.length === 0) return;

    let currentIndex = 0;
    const rotationInterval = 4000; // 4 seconds

    // Function to rotate proof points
    const rotateProofPoints = () => {
      // Remove active class from current proof point
      proofPoints[currentIndex].classList.remove('active');
      
      // Move to next proof point
      currentIndex = (currentIndex + 1) % proofPoints.length;
      
      // Add active class to new proof point
      proofPoints[currentIndex].classList.add('active');
    };

    // Start rotation
    this.credibilityBarInterval = setInterval(rotateProofPoints, rotationInterval);

    // Pause rotation on hover
    credibilityBar.addEventListener('mouseenter', () => {
      if (this.credibilityBarInterval) {
        clearInterval(this.credibilityBarInterval);
      }
    });

    // Resume rotation on mouse leave
    credibilityBar.addEventListener('mouseleave', () => {
      this.credibilityBarInterval = setInterval(rotateProofPoints, rotationInterval);
    });
  }

  // Utility function to throttle function calls
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new WebsiteApp();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WebsiteApp;
}
