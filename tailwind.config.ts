import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      maxWidth: {
        full: "1340px",
      },

      screens: {
        // max-width responsive design
        // "min-md": { max: "768px" },

        // min-width responsive design
        full: "1400px",
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

      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },

      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
  },

  plugins: [],
};

export default config;
