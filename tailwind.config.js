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
      },
      dropShadow: {
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
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

