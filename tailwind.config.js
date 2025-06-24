/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}', // durchsucht alle Komponenten in src
  ],
  theme: {
    extend: {
      fontFamily: {
        lily: ['"Lily Script One"', 'cursive'], // neue Schriftart hinzufügen
      },
    },
  },
  plugins: [],
};