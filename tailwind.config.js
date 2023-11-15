/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx, js, ts, tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B0000'
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}

