/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors :{
        hello : {
          100 : "#3a0a94",
          200: "#3a0a22"
        },
        grenny : "#148412"
      },
      container :{
        center: true,
        padding: '2rem'
      }
    },
  },
  plugins: [],
}

