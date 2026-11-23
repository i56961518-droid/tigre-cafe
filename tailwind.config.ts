import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#F4F1EA",
        espresso: "#1A0F0B",
        roast: "#2C1A14",
        burnt: "#D96518",
        crimson: "#D90368",
        lime: "#C6FF3D",
        peach: "#F4D0B5", // <-- New light color for Visit Us
      },
      fontFamily: {
        poster: ["var(--font-anton)", "var(--font-oswald)", "Impact", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 45s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;