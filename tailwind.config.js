/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,js}"],
  theme: {
    extend: {
      inset: {
        "-10000": "-10000px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        newItemInput: "calc(100% - (0.25rem + 48px))",
      },
    },
  },
  plugins: [],
};
