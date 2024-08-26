/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // add custom values
      colors: {
        "custom-color": "#000080",
        fontFamily: {
          marquis: ["Roboto Slab", "serif"],
          name: ["Kurale", "serif"],
          title: ["Open Sans", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
