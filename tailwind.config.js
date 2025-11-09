/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B8E23', // Tactical Olive Green
        'primary-dark': '#556B2F', // Dark Olive
        secondary: '#0D1117', // Deep Charcoal
        military: '#2F4F2F', // Military Green
        accent: '#9ACD32', // Bright Tactical Lime
      },
    },
  },
  plugins: [],
}
