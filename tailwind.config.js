export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        espresso: "#1C1311",
        ink: "#2B1D19",
        wine: "#4A1520",
        burgundy: "#6E1F2B",
        gold: "#C9A15B",
        brass: "#A8823F",
        cream: "#F6F1E7",
        parchment: "#ECE3D4",
        muted: "#6B5A4F",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.18em",
      },
    },
  },
  plugins: [],
};
