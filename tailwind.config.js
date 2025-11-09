/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B00', // COD Orange
        secondary: '#0A0A0A', // Dark Black
        military: '#1A4D2E', // Military Green
        accent: '#2E7D32', // Accent Green
      },
    },
  },
  plugins: [],
}
