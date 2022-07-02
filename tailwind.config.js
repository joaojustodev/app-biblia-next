/** @type {import('tailwindcss').Config} */
let plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "320px" },
        // => @media (max-width: 320px) { ... }
      },
      colors: {
        blue: {
          300: "#71adb5",
          500: "#176d81",
          700: "#0d3446",
        },
        pink: {
          500: "#FF9666",
        },
        orange: {
          500: "#FBA94C",
        },
        red: {
          500: "#F75A68",
        },
        gray: {
          100: "#F3F2EF",
          200: "#C4C4CC",
          300: "#8D8D99",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900: "#09090A",
        },
        white: "#F7F6F1",
      },
      fontFamily: {
        roboto: "Roboto, sans-serif",
        quick: "Quicksand, sans-serif",
      },

      maxWidth: {
        container: "1128px",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant("data-state", "&[data-state='active']");
    }),
  ],
};
