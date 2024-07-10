/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  // Dark mode
  "darkMode": "class",
  theme: {
    extend: {

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

