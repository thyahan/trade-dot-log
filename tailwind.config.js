/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/{components,pages,features,hocs}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
