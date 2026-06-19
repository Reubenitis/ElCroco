/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 90% neutral palette — museum / warm whites / matte black
        museum: "#F7F6F2", // museum white (page base)
        ivory: "#EFEBE1", // soft ivory (alt panels)
        paper: "#FFFFFF", // pure white (pedestals / cards)
        ink: "#0E0E0D", // matte black
        graphite: "#3A3A38", // soft black for body text
        ash: "#8A8A84", // muted captions
        line: "#E4E0D6", // hairline dividers
        // 10% accent palette — used sparingly
        gold: "#A9854B",
        goldlight: "#C8A86A",
        silver: "#A9AFB5",
        emerald: "#1E5C46",
        croco: "#5C4884",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        plaque: "0.28em",
        wordmark: "0.42em",
      },
      maxWidth: {
        editorial: "1480px",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
