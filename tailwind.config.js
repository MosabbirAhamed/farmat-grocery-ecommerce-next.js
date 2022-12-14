/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color: "#666666",
        primary: "#f0b12b",
        title: "#222222",
        orange:"#FA582C",
        green:"#669900",
        
      }
    },
  },
  plugins: [require(`@tailwindcss/typography`)],
}