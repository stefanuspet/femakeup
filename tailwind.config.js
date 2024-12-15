/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
      satoshi: ["Satoshi", "sans-serif"],
    },
    colors: {
      primary: "#5CB823",
      secondary: "#4D7D2F",
      tertiary: "#E3B0B0",
      quaternary: "#C48085",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
};
