import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FDFAF6",
        cream: {
          DEFAULT: "#F7F3ED",
          dark: "#EDE8DF",
          deeper: "#E2DAD0",
        },
        crimson: {
          DEFAULT: "#8B0E18",
          light: "#A8192A",
          muted: "#C4424F",
        },
        navy: {
          DEFAULT: "#2C2218",
          mid: "#3A2C1E",
          light: "#4A3828",
        },
        gold: {
          DEFAULT: "#A07830",
          light: "#C49A50",
        },
        stone: {
          DEFAULT: "#6B6158",
          light: "#9A9088",
          lighter: "#C2BAB0",
        },
        charcoal: "#2C2620",
      },
      fontFamily: {
        sans: ["Barlow", "system-ui", "sans-serif"],
        display: ["Bebas Neue", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
