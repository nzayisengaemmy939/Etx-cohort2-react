/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Default sans-serif font
        cursive: ['Yellowtail', 'cursive'], 
        // Custom font for cursive text
        opens:['Open+Sans','sans-serif']
      },
    },
  },
  plugins: [],
}

