const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        photo_3points_gold: "#c7b07a"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
