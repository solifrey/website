# Building Feeling Organisations

A production-quality, responsive, accessible static marketing website built with modern web technologies.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run linter
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## 🛠 Tech Stack

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion + Lottie React
- **Icons**: Lucide React
- **Fonts**: Inter (display) + Source Serif Pro (body)
- **Testing**: Jest + React Testing Library + axe-core
- **Deployment**: GitHub Pages via GitHub Actions

## 📁 Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   ├── assets/           # Images, Lottie animations, SVGs
│   ├── styles/           # CSS and Tailwind config
│   ├── data.tsx          # Site content and copy
│   └── main.tsx          # App entry point
├── .github/workflows/    # CI/CD configuration
├── tokens.json           # Design tokens
└── DESIGN_SPEC.md        # Design system documentation
```

## 🎨 Design System

The site uses a carefully crafted design system with:

- **Colors**: Primary dark background (#0C1A24), accent teal (#2CB6B3), accent gold (#EBAF64)
- **Typography**: Inter for headings, Source Serif Pro for body text
- **Spacing**: 8px increment scale (8, 16, 24, 40, 64, 80, 120)
- **Animations**: Respects `prefers-reduced-motion` for accessibility

See `DESIGN_SPEC.md` for complete design system documentation.

## 🧪 Testing

The project includes comprehensive testing:

- **Unit Tests**: Jest + React Testing Library for component testing
- **Accessibility**: axe-core integration for accessibility testing
- **Coverage**: Minimum 80% test coverage requirement

```bash
# Run tests with coverage
npm run test

# Run tests in watch mode
npm run test -- --watch
```

## 🚀 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

```bash
# Build and deploy to GitHub Pages
npm run build
npm run deploy
```

### GitHub Actions

The CI/CD pipeline:
1. Runs tests and linting
2. Builds the project
3. Deploys to GitHub Pages (main branch only)

## 📝 Content Management

All site content is managed in `src/data.tsx`. To update content:

1. Edit the `siteData` object in `src/data.tsx`
2. The changes will automatically reflect across all components

## 🎭 Animations

The site uses Framer Motion for smooth animations and Lottie for complex animations:

- **Hero animations**: Flow lines and particle effects
- **Hover effects**: Scale and color transitions
- **Scroll animations**: Fade-in effects as elements enter viewport
- **Accessibility**: All animations respect `prefers-reduced-motion`

## 🔧 Development

### Adding New Components

1. Create component in `src/components/`
2. Add corresponding test file in `src/components/__tests__/`
3. Import and use in `App.tsx`

### Customizing Design Tokens

Edit `tokens.json` and `tailwind.config.ts` to modify:
- Colors
- Typography scales
- Spacing values
- Animation durations

## 📱 Responsive Design

The site is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactions

## ♿ Accessibility

Built with accessibility in mind:
- Semantic HTML5 structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Lighthouse accessibility score ≥ 90

## 📄 License

This project is proprietary. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📞 Support

For questions or support, contact: hello@buildingfeeling.org