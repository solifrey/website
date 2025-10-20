#!/bin/bash

# Professional Website Deployment Script
# This script helps prepare the site for deployment

echo "🚀 Professional Website Deployment Script"
echo "=========================================="

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the website root directory"
    exit 1
fi

echo "📋 Pre-deployment checklist:"
echo ""

# Check for required files
echo "Checking required files..."

required_files=(
    "index.html"
    "services.html"
    "cv.html"
    "contact.html"
    "src/config.js"
    "src/styles/main.css"
    "src/main.js"
    "src/i18n.js"
    "robots.txt"
    "sitemap.xml"
    ".nojekyll"
)

missing_files=()

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (missing)"
        missing_files+=("$file")
    fi
done

if [ ${#missing_files[@]} -gt 0 ]; then
    echo ""
    echo "❌ Missing required files. Please ensure all files are present before deployment."
    exit 1
fi

echo ""
echo "🔧 Configuration check:"

# Check if config has been customized
if grep -q "Your Name" src/config.js; then
    echo "⚠️  Warning: Please update personal information in src/config.js"
fi

if grep -q "yourdomain.com" sitemap.xml; then
    echo "⚠️  Warning: Please update domain in sitemap.xml"
fi

if grep -q "yourdomain.com" robots.txt; then
    echo "⚠️  Warning: Please update domain in robots.txt"
fi

echo ""
echo "🔒 Security check:"

# Check for secure configuration
if [ ! -f "src/config.secure.js" ]; then
    echo "⚠️  Warning: Secure configuration file not found. Create src/config.secure.js with your actual values."
fi

# Check for default password
if grep -q "complexity2025" src/config.js; then
    echo "⚠️  Warning: Default CV password detected. Change this in src/config.secure.js"
fi

# Check for security headers in HTML files
security_headers_missing=0
for file in *.html; do
    if [ -f "$file" ]; then
        if ! grep -q "X-Content-Type-Options" "$file"; then
            echo "❌ $file: Missing security headers"
            security_headers_missing=1
        fi
    fi
done

if [ $security_headers_missing -eq 0 ]; then
    echo "✅ Security headers present in all HTML files"
fi

echo ""
echo "📁 Checking asset directories..."

# Check for placeholder files
if [ -f "public/images/placeholder.txt" ]; then
    echo "⚠️  Warning: Image assets are still placeholders. Add your images to public/images/"
fi

if [ -f "public/cv/placeholder.txt" ]; then
    echo "⚠️  Warning: CV file is still a placeholder. Add your CV to public/cv/cv.pdf"
fi

echo ""
echo "🌐 Deployment options:"
echo ""
echo "1. GitHub Pages:"
echo "   - Push to GitHub repository"
echo "   - Enable Pages in repository settings"
echo "   - Select 'Deploy from a branch' → 'main' → '/'"
echo ""
echo "2. Netlify:"
echo "   - Drag and drop this folder to netlify.com"
echo "   - Or connect your GitHub repository"
echo ""
echo "3. Vercel:"
echo "   - Import from Git repository"
echo "   - Deploy automatically"
echo ""
echo "4. Local testing:"
echo "   python3 -m http.server 8000"
echo "   # Then visit http://localhost:8000"
echo ""

# Check if this is a Git repository
if [ -d ".git" ]; then
    echo "📊 Git status:"
    git status --porcelain
    echo ""
    
    if [ -n "$(git status --porcelain)" ]; then
        echo "💡 You have uncommitted changes. Consider committing before deployment:"
        echo "   git add ."
        echo "   git commit -m 'Update website'"
        echo "   git push"
    else
        echo "✅ Working directory is clean"
    fi
else
    echo "💡 Initialize Git repository for version control:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial website setup'"
fi

echo ""
echo "🎉 Deployment preparation complete!"
echo ""
echo "Next steps:"
echo "1. Update personal information in src/config.js"
echo "2. Create src/config.secure.js with your actual secure values"
echo "3. Add your images to public/images/"
echo "4. Add your CV to public/cv/cv.pdf"
echo "5. Update domain references in sitemap.xml and robots.txt"
echo "6. Change default CV password in secure config"
echo "7. Deploy using one of the methods above"
echo ""
echo "Security considerations:"
echo "- Review SECURITY.md for security best practices"
echo "- Ensure HTTPS is enabled in production"
echo "- Regularly update dependencies and monitor for vulnerabilities"
echo "- Test security measures before going live"
echo ""
echo "For detailed instructions, see README.md"
