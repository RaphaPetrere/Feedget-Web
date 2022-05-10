module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257e6',
          300: '#996DFF',
          200: '#a47dff'
        },
        fromBrand: {
          500: '#8257e6',
          200: '#a47dff'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
