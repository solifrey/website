// Security utilities and validation functions
class SecurityManager {
  constructor() {
    this.allowedDomains = [
      'localhost',
      '127.0.0.1',
      'yourdomain.com', // Replace with actual domain
      'github.io',
      'netlify.app',
      'vercel.app'
    ];
    
    this.init();
  }

  init() {
    this.setupCSP();
    this.setupSecurityHeaders();
    this.setupInputValidation();
    this.setupXSSProtection();
  }

  setupCSP() {
    // Content Security Policy
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://plausible.io",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://plausible.io",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ');

    // Create and inject CSP meta tag
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp;
    document.head.appendChild(meta);
  }

  setupSecurityHeaders() {
    // Additional security headers via meta tags
    const headers = [
      { name: 'X-Content-Type-Options', value: 'nosniff' },
      { name: 'X-Frame-Options', value: 'DENY' },
      { name: 'X-XSS-Protection', value: '1; mode=block' },
      { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' }
    ];

    headers.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.value;
      document.head.appendChild(meta);
    });
  }

  setupInputValidation() {
    // Override form submission to validate inputs
    document.addEventListener('submit', (e) => {
      if (e.target.tagName === 'FORM') {
        this.validateForm(e.target);
      }
    });
  }

  setupXSSProtection() {
    // Sanitize any dynamic content
    this.sanitizeExistingContent();
    
    // Monitor for dynamic content changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            this.sanitizeText(node);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            this.sanitizeElement(node);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;

    inputs.forEach(input => {
      if (!this.validateInput(input)) {
        isValid = false;
        this.showInputError(input, 'Invalid input detected');
      } else {
        this.clearInputError(input);
      }
    });

    if (!isValid) {
      event.preventDefault();
      return false;
    }

    return true;
  }

  validateInput(input) {
    const value = input.value;
    const type = input.type;
    const name = input.name;

    // Basic length validation
    if (value.length > 10000) {
      return false;
    }

    // Type-specific validation
    switch (type) {
      case 'email':
        return this.validateEmail(value);
      case 'password':
        return this.validatePassword(value);
      case 'text':
      case 'textarea':
        return this.validateText(value);
      default:
        return true;
    }
  }

  validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) && email.length <= 254;
  }

  validatePassword(password) {
    // Basic password validation - adjust as needed
    return password.length >= 6 && password.length <= 128;
  }

  validateText(text) {
    // Check for potentially malicious content
    const dangerousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /data:text\/html/i,
      /vbscript:/i
    ];

    return !dangerousPatterns.some(pattern => pattern.test(text));
  }

  sanitizeText(textNode) {
    if (textNode.textContent) {
      // Skip sanitization for i18n content (trusted content from our JSON files)
      const parent = textNode.parentElement;
      if (parent && (parent.hasAttribute('data-i18n') || parent.hasAttribute('data-i18n-html'))) {
        return;
      }
      textNode.textContent = this.escapeHtml(textNode.textContent);
    }
  }

  sanitizeElement(element) {
    // Remove potentially dangerous attributes
    const dangerousAttrs = ['onload', 'onerror', 'onclick', 'onmouseover'];
    dangerousAttrs.forEach(attr => {
      if (element.hasAttribute(attr)) {
        element.removeAttribute(attr);
      }
    });

    // Sanitize href attributes
    if (element.tagName === 'A' && element.href) {
      if (!this.isValidUrl(element.href)) {
        element.removeAttribute('href');
      }
    }
  }

  sanitizeExistingContent() {
    // Sanitize all existing text content
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let node;
    while (node = walker.nextNode()) {
      this.sanitizeText(node);
    }
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  isValidUrl(url) {
    try {
      const urlObj = new URL(url);
      return ['http:', 'https:', 'mailto:'].includes(urlObj.protocol);
    } catch {
      return false;
    }
  }

  showInputError(input, message) {
    this.clearInputError(input);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'input-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#d9534f';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    input.parentNode.appendChild(errorDiv);
    input.style.borderColor = '#d9534f';
  }

  clearInputError(input) {
    const existingError = input.parentNode.querySelector('.input-error');
    if (existingError) {
      existingError.remove();
    }
    input.style.borderColor = '';
  }

  // Rate limiting for form submissions
  setupRateLimit() {
    const submissions = new Map();
    const maxSubmissions = 3;
    const timeWindow = 60000; // 1 minute

    return (formId) => {
      const now = Date.now();
      const userSubmissions = submissions.get(formId) || [];
      
      // Remove old submissions
      const recentSubmissions = userSubmissions.filter(
        time => now - time < timeWindow
      );
      
      if (recentSubmissions.length >= maxSubmissions) {
        return false;
      }
      
      recentSubmissions.push(now);
      submissions.set(formId, recentSubmissions);
      return true;
    };
  }

  // CSRF token generation (for future server-side implementation)
  generateCSRFToken() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  // Secure random password generation for CV access
  generateSecurePassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 16; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }
}

// Initialize security manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.securityManager = new SecurityManager();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SecurityManager;
}
