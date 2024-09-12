/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        'serif': ['Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode']
      },
      colors: {
        'bisque': 'rgb(255, 228, 196)',
        'textC' : '#018273'
      }
    },
  },
  plugins: [],
}

