// Site configuration
const CONFIG = {
  // Site metadata
  siteName: "Professional Website",
  siteDescription: "Organizational sensing, complexity thinking, and IT architecture practitioner",
  author: "Your Name",
  email: "your.email@example.com",
  
  // Social links
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername"
  },
  
  // CV download - will be overridden by secure config if available
  cvPassword: "complexity2025", // Change this to your preferred password
  
  // Analytics (optional) - will be overridden by secure config if available
  analytics: {
    plausible: {
      domain: "yourdomain.com", // Replace with your actual domain
      enabled: false // Set to true when ready
    }
  },
  
  // Languages
  languages: {
    default: "en",
    supported: ["en", "de"]
  },
  
  // Navigation
  navigation: {
    en: [
      { name: "Home", href: "/" },
      { name: "What I Offer", href: "/services" },
      { name: "CV", href: "/cv" },
      { name: "Contact", href: "/contact" }
    ],
    de: [
      { name: "Start", href: "/" },
      { name: "Meine Leistungen", href: "/services" },
      { name: "Lebenslauf", href: "/cv" },
      { name: "Kontakt", href: "/contact" }
    ]
  }
};

// Merge with secure configuration if available
if (typeof window !== 'undefined' && window.SECURE_CONFIG) {
  // Override sensitive settings with secure config
  CONFIG.cvPassword = window.SECURE_CONFIG.cvPassword;
  CONFIG.analytics = { ...CONFIG.analytics, ...window.SECURE_CONFIG.analytics };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
} else {
  window.CONFIG = CONFIG;
}
