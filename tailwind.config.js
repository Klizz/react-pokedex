const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      indigo: colors.indigo,
      blue: {
        dark: '#1f2937',
        DEFAULT: '#25ae8d',
        light: '#105267'
      },
      green: {
        DEFAULT: '#8bd77e'
      },
      yellow: {
        DEFAULT: '#f9f871'
      },
      white: {
        DEFAULT: '#FFFFFF'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
