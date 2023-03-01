const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        custom: {
          accent: { DEFAULT: "#05AFFE", dark: "#0192d5" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};