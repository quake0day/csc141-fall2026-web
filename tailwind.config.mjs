/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f3fb',
          100: '#e8e4f4',
          200: '#c9c0e3',
          300: '#9c8fcc',
          400: '#6f5fb1',
          500: '#4a2a8a',
          600: '#391f6e',
          700: '#2c1856',
          800: '#1f1140',
          900: '#1a1230',
          950: '#0e0820',
        },
        accent: {
          DEFAULT: '#a78bfa',
          warm: '#fb7185',
          mint: '#5eead4',
        },
        ground: {
          50: '#fafaf9',
          100: '#f5f4ed',
          900: '#161616',
          950: '#0c0a09',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Charter', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'Consolas', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
        lecture: '74ch',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.100'),
            a: { color: theme('colors.accent.DEFAULT'), textDecoration: 'none' },
            'a:hover': { textDecoration: 'underline' },
            strong: { color: theme('colors.ink.50') },
            code: { color: theme('colors.accent.mint') },
            h1: { color: theme('colors.ink.50') },
            h2: { color: theme('colors.ink.50') },
            h3: { color: theme('colors.ink.100') },
          },
        },
      }),
    },
  },
  plugins: [],
};
