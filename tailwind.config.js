/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4A017",
        "gold-light": "#E8B923",
        "gold-dark": "#B8860B",
        "dark-base": "#0A0A0A",
        "dark-card": "#111111",
        "dark-section": "#161616",
        "warm-white": "#F5F0E8",
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', "cursive"],
        outfit: ['"Outfit"', "sans-serif"],
      },
    },
  },
  plugins: [],
}