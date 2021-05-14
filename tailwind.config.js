module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Lato: "'Lato', sans-serif;",
        Lora: "'Lora', serif;",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
