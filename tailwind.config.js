/** @type {import('tailwindcss').Config} */
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "whiteb": "#f5f2ec",
        "clearbeige": "#eae5d8",
        "clearbrown": "#c3b4a3",
        "brown": "#866e53",
        "cleargreen": "#8ea765",
        "darkgreen": "#47572b",
        "blackgreen": "#001000"
      },
      fontSize: {
        "xs": "0.875",
        "sm": "0.625rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.375rem",
        "xls": "1.563",
        "big": "1.75"
      },
      fontFamily: {
        "raleway": ['Raleway', 'sans-serif'],
        "cinzel": ['Cinzel', 'sans-serif']
      },
      borderRadius: {
        "none": "0",
        "xs": "0.313rem",
        "sm": "0.625rem",
        "base": "0.938rem",
        "lg": "1.25rem",
        "xl": "1.563rem",
      },


    },
  },
  plugins: [

  ],
});