/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        darkred: '#8B0000',
        lightred: '#FF6347',
      },
    },
  },
  plugins: [], 
}