/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'home_img':"url('/img/home_dec.webp')",
        'fragance_img':"url('/img/fragances.png')",
        'apple_img':"url('/img/apple.png')"
      }
    },
  },
  plugins: [],
}

