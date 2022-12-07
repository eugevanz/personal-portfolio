/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // varela: "Varela",
        // varelaround: "Varela Round",
        monospace: ["Source Code Pro"],
        serif: ["Varela"],
        sans: ["Varela Round"],
      },
    },
  },
  plugins: [],
};
