module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        opensans: ["Open Sans"],
        montserrat: ["Montserrat"],
        sans: ["Poppins"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
