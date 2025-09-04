// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        dark: '#111827',
        muted: '#4B5563',
        accent: '#3B82F6',
      },
    },
  },
  plugins: [],
};
