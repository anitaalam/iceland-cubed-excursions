/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.375rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '9xl': '8rem'
    },
    extend: {
      // dropShadow: {
      //   '3xl': '4px 4px 4px rgba(0, 0, 0, 0.55)',
      // },
      colors: {
        'blue': '#1fb6ff',
        'ice-green': '#00efb6',
        'ice-orange': "#ffa658"
      },
      fontFamily: {
        'sans': ['Roboto Condensed'],
        'sans': ['Anton'],
      },
    },
  },
  plugins: [],
}
