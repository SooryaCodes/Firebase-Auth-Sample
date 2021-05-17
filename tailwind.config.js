module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "bgColor":"rgb(21, 21, 21)",
        "siColor":"rgb(17, 17, 17)",
        "sFont":"rgb(153, 153, 153)",
      },
      spacing:{
        "custom":"46rem",
        "98":"26rem"
      },
      fontSize:{
        "vs":".8rem",
        "vvs":".7rem"

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
