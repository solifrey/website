import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0C1A24',
        'accent-teal': '#2CB6B3',
        'accent-gold': '#EBAF64',
        'muted-grey': '#F3F5F6',
        'text-offwhite': '#F8FAFB',
        'text-charcoal': '#2D2D2D',
        'divider': '#DDE2E4',
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '40': '40px',
        '64': '64px',
        '80': '80px',
        '120': '120px',
      },
      borderRadius: {
        '8': '8px',
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif'],
        'body': ['Source Serif Pro', 'serif'],
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '1.1' }],
        'h2': ['36px', { lineHeight: '1.2' }],
        'h3': ['24px', { lineHeight: '1.3' }],
        'body-large': ['18px', { lineHeight: '1.5' }],
        'body': ['16px', { lineHeight: '1.6' }],
      },
      animation: {
        'hero-loop': 'heroLoop 8s ease-in-out infinite',
        'section-fade': 'sectionFade 0.7s ease-out',
        'hover-ripple': 'hoverRipple 0.25s ease-out',
      },
      keyframes: {
        heroLoop: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
        sectionFade: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        hoverRipple: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }: any) {
      addUtilities({
        '.bg-flow-gradient': {
          background: 'linear-gradient(120deg, #2CB6B3 0%, #EBAF64 100%)',
        },
      })
    },
  ],
}

export default config
