/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
      extend: {
        colors: {
          brand: {
            500: '#8257e6'
          },
          bkg: {
            700: '#09090A'
          }
        }
      },
  },
  plugins: [],
}
