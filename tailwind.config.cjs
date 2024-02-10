/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at top right, var(--tw-gradient-stops))",
      },
      colors: {
        neon: "#00ffff80",
      },
    },
  },

  plugins: [],
};

module.exports = config;
