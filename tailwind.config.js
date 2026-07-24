/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Sand — warm ivory/cream base, not the AI-default cream+terracotta duo on its own
        sand: {
          50: '#FBF8F2',
          100: '#F3ECDD',
          200: '#E7DCC3',
        },
        ink: '#2B2620',
        // Indigo — Rajasthani night-sky blue, used for header/footer/dark sections
        indigo: {
          light: '#3A4E77',
          DEFAULT: '#1E2E4F',
          deep: '#101B33',
        },
        // Gold — brass/marigold accent
        gold: {
          light: '#E0BE72',
          DEFAULT: '#C79A3E',
          dark: '#9C7A2A',
        },
        // Rust — Rajasthani textile red, primary CTA color
        rust: {
          DEFAULT: '#9C3D22',
          dark: '#7A2E1A',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
      },
      boxShadow: {
        card: '0 12px 32px -12px rgba(16, 27, 51, 0.28)',
      },
    },
  },
  plugins: [],
};
