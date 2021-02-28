const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      //   fontFamily: {
      //     brand: ["League Gothic", "sans-serif"],
      //     scrawl: ["League Script Number One", "serif"],
      //     cursive: ["Pacifico", "cursive"],
      //   },
      animation: {
        "spin-slow": "spin 7s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
