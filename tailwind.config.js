/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "rgb(13 155 136 / <alpha-value>)",
          hi: "rgb(17 196 173 / <alpha-value>)",
          lo: "rgb(7 46 40 / <alpha-value>)",
          mid: "rgb(11 92 82 / <alpha-value>)",
        },
        navy: {
          DEFAULT: "rgb(255 255 255 / <alpha-value>)",
          2: "rgb(248 250 251 / <alpha-value>)",
          3: "rgb(240 244 246 / <alpha-value>)",
        },
        dark: "rgb(11 37 69 / <alpha-value>)",
        green: "rgb(23 168 92 / <alpha-value>)",
        red: "rgb(212 64 64 / <alpha-value>)",
        ink: "rgb(10 20 40 / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
