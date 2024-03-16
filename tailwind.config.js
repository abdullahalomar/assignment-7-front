/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(56 189 248)",
          secondary: "rgb(20 184 166)", //green
          accent: "rgb(255, 204, 231)",
          neutral: "rgb(77, 81, 152)",
          base: "#ffffff",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
};
