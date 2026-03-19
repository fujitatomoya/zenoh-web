/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './assets/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        zenoh: {
          navy: '#0A143C',
          blue: '#1450ff',
          accent: '#336699',
          light: '#E8F0FE',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        logo: ['Maven Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            // Inline code styling
            'code': {
              backgroundColor: theme('colors.gray.100'),
              borderRadius: theme('borderRadius.sm'),
              padding: '0.1em 0.3em',
              fontWeight: '400',
            },
            // Reset pre so Chroma CSS handles all code block styling
            'pre': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              borderRadius: '0',
            },
            // Reset code-inside-pre so Chroma token classes control colors
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              fontWeight: 'inherit',
              color: 'inherit',
            },
          },
        },
        invert: {
          css: {
            'code': {
              backgroundColor: theme('colors.gray.800'),
            },
            'pre': {
              backgroundColor: 'transparent',
              color: 'inherit',
            },
            'pre code': {
              backgroundColor: 'transparent',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
