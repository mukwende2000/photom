/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center:true,
      padding: '3rem',
    },
    extend: {
      colors: {
        primary: '#b99272'
      }
    },
  },
  plugins: [],
}

