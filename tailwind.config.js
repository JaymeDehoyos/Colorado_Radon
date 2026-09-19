/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0f3457',
        brandblue: '#1c6fb0',
        brandblued: '#155a91',
        teal: '#0ea5a0',
        ink: '#0f2a43',
        bodytext: '#4a5b6d',
        muted: '#6b7c8e',
        hairline: '#e2ebf3',
        soft: '#f6fafd',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        head: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
 