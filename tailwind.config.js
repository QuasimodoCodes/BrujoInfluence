/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1", // Indigo/Purple
        "primary-dark": "#4F46E5", // Darker version of primary for hover states
        secondary: "#EC4899", // Pink
        dark: "#111827", // Very dark blue/gray
        light: "#F9FAFB", // Light gray/white
        accent: "#F59E0B", // Amber/Orange accent
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 15px rgba(99, 102, 241, 0.5)",
      },
    },
  },
  plugins: [],
};
