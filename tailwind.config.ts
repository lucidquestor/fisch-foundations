import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6f5f2",
          100: "#ebe8e0",
          200: "#d6d0c2",
          300: "#bdb4a0",
          400: "#a3957d",
          500: "#8f8068",
          600: "#7a6c58",
          700: "#645749",
          800: "#544a3f",
          900: "#484038",
          950: "#27221c",
        },
        accent: {
          DEFAULT: "#c9a227",
          dark: "#a8861f",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
