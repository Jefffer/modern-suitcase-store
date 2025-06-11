import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Definimos la fuente 'Inter' como la principal para 'sans-serif'
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          light: '#0ea5e9', // sky-500
          DEFAULT: '#0284c7', // sky-600
          dark: '#38bdf8',  // sky-400
        },
        // secondary: '#f59e0b', // amber-500
      }
    },
  },
  plugins: [],
}