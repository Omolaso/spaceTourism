/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0B0D17",
        blue: "#D0D6F9",
        white: "#FFFFFF",
        grey: "#181D15",
      },
    },
  },
  plugins: [],
};
