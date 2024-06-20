/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      colors: {
        customGray: "#1c1c1c",
      },
    },
    fontFamily: {
      sans: "Helvetica, Arial, sans-serif",
    },
  },
  plugins: [],
};
