import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme Colors
        dark: {
          DEFAULT: "#1a1a1a",
          100: "#0d0d0d",
          200: "#1f1f1f",
          300: "#2a2a2a",
        },
        gold: {
          DEFAULT: "#d4af37",
          light: "#f4d03f",
          dark: "#b4941f",
        },
        green: {
          DEFAULT: "#4ade80",
          light: "#86efac",
          dark: "#22c55e",
        },
        red: {
          DEFAULT: "#ef4444",
          light: "#f87171",
          dark: "#dc2626",
        },
        blue: {
          DEFAULT: "#3b82f6",
          light: "#60a5fa",
          dark: "#2563eb",
        },
        purple: {
          DEFAULT: "#a855f7",
          light: "#c084fc",
          dark: "#9333ea",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
