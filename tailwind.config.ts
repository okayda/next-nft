import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      maxWidth: {
        full: "1280px",
      },

      screens: {
        // max-width responsive design
        // "max-md": { max: "768px" },

        // min-width responsive design
        xl: "1200px",
        xxl: "1400px",
      },

      colors: {
        purple: {
          light: "#764AF1",
          dark: "#1f1a37",
        },

        light: {
          black: "#D4D7E5",
        },
      },

      keyframes: {
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },

          "50%": {
            "background-position": "100% 100%",
          },

          to: {
            "background-position": "0% 0%",
          },
        },
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
