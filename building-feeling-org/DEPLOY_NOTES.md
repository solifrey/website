# Deployment Notes

## GitHub Pages Setup

### Initial Setup
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically deploy on push to `main` branch

### Custom Domain (Optional)
1. Add `CNAME` file to `public/` directory with your domain
2. Configure DNS records as per GitHub Pages documentation
3. Update `index.html` meta tags with your domain

## Environment Variables

### Required Secrets
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions
- No additional secrets required for basic deployment

### Optional Configuration
- Update `package.json` homepage field if using custom domain
- Modify `vite.config.ts` base path if deploying to subdirectory

## Build Process

### Local Testing
```bash
# Test production build locally
npm run build
npm run preview

# Check build output
ls -la dist/
```

### Deployment Verification
1. Check GitHub Actions tab for successful workflow runs
2. Verify `gh-pages` branch contains built files
3. Test deployed site functionality

## Asset Management

### Lottie Animations
- Place Lottie JSON files in `src/assets/lottie/`
- Update component imports to use actual Lottie files
- Current implementation uses placeholder animations

### SVG Icons
- Custom SVG icons in `src/assets/svg/`
- Use Lucide React for standard icons
- Optimize SVGs for web delivery

### Images
- Place images in `public/` for static assets
- Use optimized formats (WebP, AVIF when possible)
- Include proper alt text for accessibility

## Performance Optimization

### Build Optimization
- Vite automatically optimizes assets
- Code splitting for better loading performance
- Tree shaking removes unused code

### Runtime Performance
- Lazy loading for below-the-fold content
- Optimized animations with `prefers-reduced-motion`
- Efficient re-renders with React best practices

## Monitoring & Analytics

### Basic Analytics (Optional)
1. Add Google Analytics or similar service
2. Update `index.html` with tracking code
3. Ensure GDPR compliance for EU users

### Performance Monitoring
- Use Lighthouse CI in GitHub Actions
- Monitor Core Web Vitals
- Set up alerts for performance regressions

## Security Considerations

### Content Security Policy
- Consider adding CSP headers
- Validate all external resources
- Sanitize any user-generated content

### HTTPS
- GitHub Pages provides HTTPS by default
- Ensure all resources load over HTTPS
- Update any HTTP links to HTTPS

## Troubleshooting

### Common Issues

#### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are installed
- Review TypeScript compilation errors

#### Deployment Issues
- Ensure GitHub Pages is enabled
- Check repository permissions
- Verify workflow file syntax

#### Performance Issues
- Optimize images and animations
- Check bundle size
- Review network requests

### Debug Commands
```bash
# Check build output
npm run build -- --debug

# Analyze bundle
npm run build -- --analyze

# Test accessibility
npm run test -- --testNamePattern="accessibility"
```

## Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor security vulnerabilities
- Update content as needed

### Backup Strategy
- Repository serves as primary backup
- Keep local copies of important assets
- Document any custom configurations

## Contact & Support

For deployment issues or questions:
- Check GitHub Actions logs first
- Review this documentation
- Contact: hello@buildingfeeling.org

## Version History

- v1.0.0: Initial deployment setup
- Current: GitHub Actions CI/CD pipeline
