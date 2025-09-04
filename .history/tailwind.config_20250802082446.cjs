/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0e0e10",       // deep dark background
        light: "#f5f5f5",      // light text color
        accent: "#5eead4",     // optional accent (like teal-300)
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
