const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      sm: ["0.875rem", "1.25rem"],
      ...defaultTheme.fontSize,
      "3xl": '1.75rem'
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#00031A",
        gray: {
          50: "#f4f7f4",
          100: "#ececec",
          200: "#e0e0e0",
          300: "#d8d8d8",
          400: "#cecece",
          500: "#c4c4c4",
          600: "#bababa",
          700: "#636363",
          800: "#a6a6a6",
          900: "#9c9c9c"
        },
        blue: {
          50: "#9EBBF3",
          100: "#2f94ff",
          200: "#258afe",
          300: "#1b80f4",
          400: "#1D76EF",
          500: "#076ce0",
          600: "#0062d6",
          700: "#446CBC",
          800: "#004ec2",
          900: "#254A96"
        },
        green: {
          50: "#87d153",
          100: "#7dc749",
          200: "#73bd3f",
          300: "#69b335",
          400: "#5fa92b",
          500: "#559f21",
          600: "#4b9517",
          700: "#418b0d",
          800: "#378103",
          900: "#2d7700"
        },
        red: {
          50: "#ff614c",
          100: "#fc5742",
          200: "#f24d38",
          300: "#e8432e",
          400: "#de3924",
          500: "#d42f1a",
          600: "#ca2510",
          700: "#c01b06",
          800: "#b61100",
          900: "#ac0700"
        }
      },
    },
  },
  plugins: [],
};