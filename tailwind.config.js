/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        white: "#FFFFFF",
        black: "#161616",
        grey: "#686B72",
        pink: "#C10171",
        purple: "#5C00F2",
      },
    },
  },
  plugins: [],
};
