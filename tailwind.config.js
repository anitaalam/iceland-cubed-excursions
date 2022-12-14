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
      '5xl': '3.75rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6em',
      '9xl': '8rem',
      '10xl': '10em',
      '11xl': '11em'
    },
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'ice-green': '#00efb6',
        'ice-orange': "#ffa658"
      },
      fontFamily: {
        'sans': ['Roboto Condensed'],
        'sans': ['Anton'],
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
