const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        darkBrown: "#332D2A",
        photo_3points_gold: "#c7b07a",
        review_of_the_architect_primary: "#bba190",
        visualization_site_primary: "#b09673",
        inspiration_for_success_primary: "#bfa1a8"
      },
      spacing: {
          '1/2': '50%',
          '1/3': '33.333333%',
          '2/3': '66.666667%',
          '1/4': '25%',
          '2/4': '50%',
          '3/4': '75%',
          '1/5': '20%',
          '2/5': '40%',
          '3/5': '60%',
          '4/5': '80%',
          '1/6': '16.666667%',
          '2/6': '33.333333%',
          '3/6': '50%',
          '4/6': '66.666667%',
          '5/6': '83.333333%',
          'full': '100%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
