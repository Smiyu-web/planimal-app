module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#646464",
        secondary: "#edbfb7",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        windsong: ["WindSong", "sans-serif"],
      },
      height: {
        "10vh": "10vh",
        "20vh": "20vh",
        "50vh": "50vh",
        "70vh": "70vh",
        "80vh": "80vh",
      },
      width: {
        "30rem": "30rem",
        "70rem": "70rem",
        "80rem": "80rem",
      },
      gridTemplateColumns: {
        cartitem: "110px 160px 50px",
        navbar: "70px 180px 170px",
        product: "repeat(6, minmax(250px, 1fr))",
        productSm: "repeat(6, minmax(150px, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
