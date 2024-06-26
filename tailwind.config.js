/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "custom-image": "url('/img/bg-grain.jpg')",
        "custom-image-mobile": "url('/img/bg-grain-mobile.jpg')",
        "hero-pattern": "url(./img/hero.webp)",
      }),

      colors: {
        "waide-cream": "#FFFEEC",
        "waide-gray": "#414142",
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
