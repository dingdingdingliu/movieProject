/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1600px",
      },
      backgroundImage: {
        linearBackground:
          "linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%)",
      },
      colors: {
        white: "#FFFFFF",
        black: "#161616",
        grey: "#686B72",
        pink: "#C10171",
        purple: "#5C00F2",
        opacityBackground: "rgba(104, 107, 114, 0.1)",
      },
    },
  },
  plugins: [],
};
