/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        doctor_portal: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#4A4256",

          neutral: "#3A4256",

          "base-100": "#FFFFFF",

          info: "#5CC4DB",

          success: "#10562C",

          warning: "#9A6509",

          error: "#F5312E",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
