/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rblack': ['RedHatDisplay-Black', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 15px 5px #5e67ac',
      },
    },
  },
  plugins: [],
}

