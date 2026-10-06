/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        parchment: '#F7F5EF',
        saffron: '#D9682C',
        gold: '#D4AF37',
        navy: '#0B132B',
      }
    },
  },
  plugins: [],
}
