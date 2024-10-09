/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        // Palette personalizzata
        primary: '#1E3A8A',    // Blu scuro (per testi principali, titoli)
        secondary: '#3B82F6',  // Blu chiaro (per bottoni o link)
        accent: '#F59E0B',     // Colore accentuato (ad esempio per evidenziare call to action)
        background: '#F3F4F6', // Grigio chiaro (sfondi o sezioni secondarie)
        text: '#111827',       // Grigio molto scuro (per il testo)
        border: '#E5E7EB',     // Grigio neutro (per bordi e separatori)
      },
    },
  },
  plugins: [],
}
