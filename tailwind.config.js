/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {},
    fontFamily:{ body:['Josefin Sans', 'sans-serif'], body2:['Source Code Pro']}
  },
  plugins: [require("daisyui")],
}

