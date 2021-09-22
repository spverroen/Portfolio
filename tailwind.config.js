// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlue: {
          DEFAULT: '#93B7BE'
        },
        lightWhite: {
          DEFAULT: '#FFEBEB'
        },
        darkGray: {
          DEFAULT: '#1D2123'
        },
        lightGray: {
          DEFAULT: '#42454A'
        },
        pars:{
          DEFAULT: "#F59C57",
        },
        flexzipper: {
          DEFAULT: '#3690F7'
        },
        multiversum:{
          DEFAULT: "#1DD1A1",
        },
      },
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}