module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        heading: ["Circular-std"],
      },
    },
  },
  plugins: ["./src/components/**/*.{js,jsx, tsx}", "./public/index.html"],
};
