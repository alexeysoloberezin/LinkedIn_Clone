/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#f9c982', // You can set the specific shade of gold you want
          700: '#c49148', // You can set the specific shade of gold you want
        },
      },
    },
  },
  plugins: [],
}

