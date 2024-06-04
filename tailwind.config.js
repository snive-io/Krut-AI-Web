/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
      },
      colors: {
        krutNeon: "#00D4EF",
        KrutTxt: "#3292BB",
        highLightBg: "#EFF6FF",
      },
    }
  },
  plugins: [],
}

