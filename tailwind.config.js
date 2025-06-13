/** @type {import('tailwindcss').Config} */
export default {
  // --- Tambahkan baris ini ---
  darkMode: 'class',
  // -------------------------
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "true-blue": "#0E5FB4",
        "mustard-seed": "#D8D262",
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        "dark-purple": "#5D337F",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}