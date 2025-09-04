// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['DM Sans', 'sans-serif'],
        body: ['Roboto Mono', 'monospace'],
      },
      colors: {
        background: '#0f0f0f',
        accent: '#f5c518',
        textPrimary: '#f3f3f3',
        textSecondary: '#a1a1a1',
      },
    },
  },
  plugins: [],
};
