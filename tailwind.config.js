module.exports = {
  purge: {
    content: ["./src/**/*.html"],
    safelist: ["anchor-link-active"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          50: "#E8FFEA",
          100: "#D0FFD5",
          200: "#B9FFC0",
          300: "#00E617",
          400: "#00CF15",
          500: "#00B812",
          600: "#00AA11",
          700: "#009D10",
          800: "#00900E",
          900: "#00830D",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
