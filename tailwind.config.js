/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
        lg: "1.5rem",
        xl: "2.5rem",
        "2xl": "2rem",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
