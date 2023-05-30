/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
   
    extend: {
      backgroundImage: {
        hero: "url('.src/routes/Home/images/hero1.jpg')"
      },
      colors: {
        primary: '#b99272',
        secondary: 'white',
      }
    },
  },
  plugins: [],
}

