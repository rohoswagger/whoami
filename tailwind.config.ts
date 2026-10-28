import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#eee9d9",
          100: "#e5dfce",
          200: "#d7d2bf",
          300: "#babda6",
          400: "#646d56",
          500: "#606a52",
          600: "#59624b",
          700: "#48523c",
          800: "#3b4530",
          900: "#30362a",
        },
        blue: {
          50: "#e7ebd6",
          100: "#dce3bf",
          200: "#bdcb98",
          500: "#5d6d38",
          600: "#536c35",
          700: "#405d32",
          800: "#334c27",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: [
          "var(--font-figtree)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        // Exponential ease-out. No bounce, no elastic.
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
