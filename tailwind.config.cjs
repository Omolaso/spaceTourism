/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      black: "#0B0D17",
      blue: "#D0D6F9",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
