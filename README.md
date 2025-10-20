# Professional Website

A personal professional website that functions as a digital CV and introduction hub for a practitioner working at the intersection of organizational sensing, complexity thinking, and IT architecture.

## 🌟 Features

- **Professional & Approachable Design**: Clean, modern aesthetic with complexity-inspired visual elements
- **SEO Optimized**: Complete meta tags, structured data, sitemap, and robots.txt
- **Responsive & Lightweight**: Works perfectly on all devices with fast loading times
- **Multilingual Support**: English and German language toggle
- **Easy Hosting**: Optimized for GitHub Pages (free hosting)
- **Simple Maintenance**: Static site with clear structure and documentation

## 🚀 Quick Start

### Local Development

1. **Clone or download** this repository
2. **Start a local server** with auto-reload:
   ```bash
   # Option 1: Interactive development server (recommended)
   ./dev-server.sh
   
   # Option 2: HTTP Server (compatible with older Node.js)
   npm run dev-reload
   
   # Option 3: Browser Sync with auto-reload
   npm run dev-browser-sync
   
   # Option 4: Simple static server
   npm run dev-serve
   
   # Option 5: Basic Python server (no auto-reload)
   python3 -m http.server 8000
   ```
3. **Open your browser** to `http://localhost:8000`

**Recommended**: Use `./dev-server.sh` for the best development experience with auto-reload functionality.

**Note**: If you're using Node.js v12 or older, some auto-reload features may not be available. The HTTP Server option (`npm run dev-reload`) is compatible with older Node.js versions.

### Customization

1. **Update personal information** in `src/config.js`:
   - Site name, description, and author
   - Social media links
   - CV password
   - Analytics configuration

2. **Replace placeholder content**:
   - Update all "Your Name" references
   - Replace email addresses and social links
   - Add your actual CV to `public/cv/cv.pdf`
   - Add your profile image to `public/images/profile.jpg`
   - Add other images to `public/images/`

3. **Customize styling** in `src/styles/main.css`:
   - Color scheme (CSS variables in `:root`)
   - Typography and spacing
   - Visual elements and animations

## 📁 Project Structure

```
website/
├── src/
│   ├── components/          # Reusable components (future use)
│   ├── locales/            # Translation files
│   │   ├── en.json         # English translations
│   │   └── de.json         # German translations
│   ├── styles/
│   │   └── main.css        # Main stylesheet
│   ├── config.js           # Site configuration
│   ├── i18n.js            # Internationalization
│   └── main.js            # Main JavaScript functionality
├── public/
│   ├── images/            # Image assets
│   └── cv/               # CV files
├── blog/                 # Blog structure (hidden from nav)
├── index.html            # Home page
├── services.html         # Services page
├── cv.html              # CV page
├── contact.html         # Contact page
├── robots.txt           # SEO robots file
├── sitemap.xml          # SEO sitemap
└── .nojekyll           # GitHub Pages configuration
```

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Create a GitHub repository** and push your code
2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

3. **Your site will be available** at `https://yourusername.github.io/repository-name`

### Custom Domain Setup

1. **Add a CNAME file** to the root directory:
   ```
   yourdomain.com
   ```

2. **Configure DNS** with your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

3. **Update GitHub Pages settings**:
   - Go to repository Settings → Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS"

### Alternative Hosting Options

- **Netlify**: Drag and drop the folder or connect to Git
- **Vercel**: Import from Git repository
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3 + CloudFront**: For advanced users

## 🔒 Security

This website includes comprehensive security measures to protect against common web vulnerabilities:

- **Content Security Policy (CSP)** to prevent XSS attacks
- **Input validation and sanitization** for all forms
- **Rate limiting** to prevent abuse
- **Secure password handling** with timing attack protection
- **Security headers** to prevent various attack vectors
- **Separate secure configuration** for sensitive data

See [SECURITY.md](SECURITY.md) for detailed security documentation and best practices.

## 🔧 Configuration

### Site Configuration (`src/config.js`)

```javascript
const CONFIG = {
  siteName: "Your Professional Website",
  siteDescription: "Your professional description",
  author: "Your Name",
  email: "your.email@example.com",
  
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername"
  }
};
```

### Secure Configuration (`src/config.secure.js`)

**Important**: Create this file with your actual secure values. This file is excluded from version control.

```javascript
const SECURE_CONFIG = {
  cvPassword: "your-strong-password-here",
  analytics: {
    plausible: {
      domain: "yourdomain.com",
      enabled: true
    }
  },
  security: {
    rateLimit: {
      maxSubmissions: 3,
      timeWindow: 60000
    }
  }
};
```

### Adding New Languages

1. **Create translation file** in `src/locales/` (e.g., `fr.json`)
2. **Update config.js** to include the new language:
   ```javascript
   languages: {
     default: "en",
     supported: ["en", "de", "fr"]
   }
   ```
3. **Add language toggle button** in navigation

### Adding Blog Posts

1. **Create new HTML file** in `blog/` directory
2. **Use consistent structure** with existing blog posts
3. **Update blog index** to include new posts
4. **Add to sitemap.xml** when ready to make public

## 🎨 Customization Guide

### Colors and Theme

Edit CSS variables in `src/styles/main.css`:

```css
:root {
  --color-primary: #2c5aa0;      /* Main brand color */
  --color-secondary: #4a90a4;    /* Secondary color */
  --color-accent: #5cb85c;       /* Accent color */
  --color-teal: #20b2aa;         /* Complexity-inspired accent */
  /* ... other variables */
}
```

### Typography

The site uses three font families:
- **Inter**: Primary font for body text and UI
- **Lora**: Secondary font for headings and emphasis
- **IBM Plex Mono**: Monospace font for code and technical content

### Visual Elements

The design includes complexity-inspired elements:
- Floating background patterns
- Gradient overlays
- Organic flow animations
- Network-like visual cues

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🔍 SEO Features

- **Meta tags**: Complete Open Graph and Twitter Card support
- **Structured data**: JSON-LD schema for personal profile
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Proper crawling instructions
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 📊 Analytics

### Plausible Analytics (Recommended)

1. **Sign up** at [plausible.io](https://plausible.io)
2. **Add your domain** to Plausible
3. **Update config.js**:
   ```javascript
   analytics: {
     plausible: {
       domain: "yourdomain.com",
       enabled: true
     }
   }
   ```

### Google Analytics (Alternative)

Replace the Plausible script in `src/main.js` with Google Analytics code.

## 🛠️ Maintenance

### Regular Updates

1. **Content updates**: Edit HTML files directly
2. **Styling changes**: Modify `src/styles/main.css`
3. **Functionality**: Update `src/main.js`
4. **Translations**: Edit JSON files in `src/locales/`

### Adding New Pages

1. **Create HTML file** following existing structure
2. **Add to navigation** in all HTML files
3. **Update sitemap.xml**
4. **Add translations** for new content

### Performance Optimization

- **Images**: Optimize and compress all images
- **CSS**: Minify for production (optional)
- **JavaScript**: Minify for production (optional)
- **Caching**: Configure server caching headers

## 🔒 Security Considerations

- **CV Password**: Change default password in production
- **Form Handling**: Implement proper server-side form processing
- **HTTPS**: Always use HTTPS in production
- **Content Security Policy**: Consider adding CSP headers

## 📞 Support

### Common Issues

1. **Images not loading**: Check file paths and ensure images exist
2. **Translations not working**: Verify JSON syntax and file paths
3. **CV download failing**: Ensure CV file exists and password is correct
4. **GitHub Pages not updating**: Check repository settings and file paths

### Getting Help

- Check the browser console for JavaScript errors
- Validate HTML and CSS
- Test on different devices and browsers
- Review GitHub Pages documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Fonts**: Google Fonts (Inter, Lora, IBM Plex Mono)
- **Icons**: Unicode symbols and emoji
- **Inspiration**: Complexity science and organizational sensing methodologies
- **Design**: Modern web design principles and accessibility guidelines

---

**Ready to launch your professional website?** Follow the deployment guide above and start building your digital presence today!
