const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        brand: ['"Monoton"', "sans-serif"],
        primary: ['"Alata"', "sans-serif"],
      },
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
