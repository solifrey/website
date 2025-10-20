# Design System Specification

## Overview

This document outlines the complete design system for the "Building Feeling Organisations" website, including color tokens, typography, spacing, motion, and accessibility guidelines.

## Color System

### Primary Colors
- **Primary Background**: `#0C1A24` - Deep navy blue for main background
- **Text Off-white**: `#F8FAFB` - High contrast text color
- **Text Charcoal**: `#2D2D2D` - Secondary text color

### Accent Colors
- **Accent Teal**: `#2CB6B3` - Primary accent color for CTAs and highlights
- **Accent Gold**: `#EBAF64` - Secondary accent color for gradients and emphasis

### Neutral Colors
- **Muted Grey**: `#F3F5F6` - Light background for cards and sections
- **Divider**: `#DDE2E4` - Subtle borders and separators

### Gradient
- **Flow Gradient**: `linear-gradient(120deg, #2CB6B3 0%, #EBAF64 100%)`
  - Used for primary CTAs and key visual elements
  - Creates a sense of flow and movement

## Typography

### Font Families
- **Display Font**: Inter (Google Fonts)
  - Used for headings and UI elements
  - Clean, modern sans-serif
- **Body Font**: Source Serif Pro (Google Fonts)
  - Used for body text and quotes
  - Elegant serif for readability

### Type Scale
- **H1**: 64px / 1.1 line-height
  - Hero headlines and major section titles
- **H2**: 36px / 1.2 line-height
  - Section headings
- **H3**: 24px / 1.3 line-height
  - Subsection headings and card titles
- **Body Large**: 18px / 1.5 line-height
  - Hero subtitles and important body text
- **Body**: 16px / 1.6 line-height
  - Standard body text and descriptions

## Spacing System

Based on 8px increments for consistent rhythm:

- **8px**: Micro spacing (gaps between small elements)
- **16px**: Small spacing (padding within components)
- **24px**: Medium spacing (margins between related elements)
- **40px**: Large spacing (section padding, card spacing)
- **64px**: Extra large spacing (major section breaks)
- **80px**: Hero spacing (large section padding)
- **120px**: Maximum spacing (major page sections)

## Border Radius

- **8px**: Standard border radius for all rounded elements
  - Cards, buttons, images, and containers
  - Creates consistent, modern appearance

## Motion & Animation

### Animation Principles
- **Respectful**: All animations respect `prefers-reduced-motion`
- **Purposeful**: Animations enhance UX, never distract
- **Smooth**: 60fps performance with hardware acceleration

### Motion Tokens
- **Hero Loop**: 8000ms - Slow, continuous background animations
- **Section Fade**: 700ms - Standard fade-in duration for scroll animations
- **Hover Ripple**: 250ms - Quick feedback for interactive elements

### Animation Types
1. **Entrance Animations**: Fade-in with slight upward movement
2. **Hover Effects**: Scale transforms (1.02-1.05) with color transitions
3. **Scroll Animations**: Staggered reveals as elements enter viewport
4. **Loading States**: Subtle pulse animations for loading indicators

## Component Design Patterns

### Cards
- Background: `muted-grey/5` to `muted-grey/10` gradient
- Border: `divider/20` for subtle definition
- Padding: 40px for comfortable content spacing
- Hover: Scale transform (1.02) with gradient overlay

### Buttons
- Primary: Flow gradient background with dark text
- Hover: Scale transform (1.05) for feedback
- Border radius: 8px for consistency
- Typography: Inter font, medium weight

### Navigation
- Fixed position with backdrop blur
- Semi-transparent background (`primary-bg/90`)
- Border bottom for subtle separation
- CTA button uses flow gradient

## Accessibility Guidelines

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Primary text: 16.5:1 contrast ratio
- Secondary text: 12.8:1 contrast ratio

### Motion
- Respects `prefers-reduced-motion: reduce`
- Provides alternative static states
- No motion-dependent interactions

### Focus States
- Visible focus indicators on all interactive elements
- Keyboard navigation support
- Logical tab order

### Screen Readers
- Semantic HTML5 structure
- ARIA labels where needed
- Descriptive alt text for images
- Proper heading hierarchy

## Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly interaction targets (44px minimum)

## Performance Considerations

### Image Optimization
- SVG icons for scalability
- Lottie animations for complex motion
- Optimized file sizes for web delivery

### Animation Performance
- CSS transforms for smooth animations
- Hardware acceleration where possible
- Reduced motion alternatives

## Brand Voice

### Visual Tone
- **Professional**: Clean, modern design
- **Approachable**: Warm colors and friendly interactions
- **Confident**: Strong typography and clear hierarchy
- **Thoughtful**: Attention to detail and accessibility

### Content Tone
- **Conversational**: Direct, human language
- **Insightful**: Deep understanding of organizational challenges
- **Solution-oriented**: Focus on practical outcomes
- **Empathetic**: Acknowledges the complexity leaders face

## Implementation Notes

### CSS Custom Properties
```css
:root {
  --color-primary: #0C1A24;
  --color-teal: #2CB6B3;
  --color-gold: #EBAF64;
  --spacing-8: 8px;
  --spacing-16: 16px;
  /* ... */
}
```

### Tailwind Configuration
All design tokens are configured in `tailwind.config.ts` and available as utility classes throughout the project.

### Design Tokens File
The `tokens.json` file contains all design tokens in a structured format for easy reference and potential integration with design tools.
