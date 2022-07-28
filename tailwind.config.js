/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-banner': "url('/images/home-banner.png",
      }
    },
  },
  plugins: [],
}
