/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx,html}", "./public/**/*.{tsx,jsx,html}"],
  theme: {
    extend: {
      colors: {
        mediumBlue: "#000000",
        darkBlue: "#333",
        lightBlue: "#1e1e1e",
        vio: "#7640FD",
      },
    },
    fontFamily: {
      openSans: "Open Sans",
    },
  },
  plugins: [],
};
