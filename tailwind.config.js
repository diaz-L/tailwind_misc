const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        photo_3points_gold: "#c7b07a",
        review_of_the_architect_primary: "#bba190",
        visualization_site_primary: "#b09673"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
