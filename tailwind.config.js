module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '18': '4.5rem'
      }
    },
    fontFamily: {
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
