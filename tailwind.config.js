/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx,css,html}"
  ],
  reference: true,
  safelist: [
    "bg-gray-800",
    "rounded-2xl",
    "p-4",
    "shadow-xl",
    "transition-transform",
    "hover:scale-105",
    // legg til alle andre klasser du bruker i @apply
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}