/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Inter', 'sans-serif'],
      },
      colors:{
        primary: '#22c55e',
        secondary: '#15803d',
        "card-bg": "#F2F2F2",
        "footer-bg": "#262626",
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['focus'],
      ringColor: ['focus'],
      ringWidth: ['focus'],
    },
  },
  plugins: [],
}

