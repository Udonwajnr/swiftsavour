/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'opacity-rgba': 'rgba(255,255,255,0.8)',
      },
    },
  },
  plugins: [],
}

