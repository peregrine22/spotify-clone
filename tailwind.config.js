const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        112: '28rem',
        120: '30rem'
      },
      colors: {
        gray: {
          ...colors.gray,
          850: '#18212f',
          950: '090c14'
        },
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        teal: colors.teal
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Noto Sans Mono', ...defaultTheme.fontFamily.mono]
      }
    }
  },
  plugins: []
};
