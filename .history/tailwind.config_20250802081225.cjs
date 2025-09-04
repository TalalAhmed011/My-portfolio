/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        terminal: ['"Share Tech Mono"', 'monospace'],
      },
      colors: {
        terminalBg: '#0f0f0f',
        terminalGreen: '#00ff00',
        terminalGray: '#2e2e2e',
        terminalAccent: '#00e676',
      },
    },
  },
  plugins: [],
}
