/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "custom-image": "url('/img/custom-bg.webp')",
      }),

      colors: {
        "waide-cream": "#FFFEEC",
        "waide-gray": "#414142",
      },

      fontFamily: {
        montserrat: [`Montserrat`, `sans-serif`],
        archivo: ["Archivo Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
