import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          light: "#764AF1",
          dark: "#1f1a37",
        },

        light: {
          black: "#D4D7E5",
        },
      },
    },
  },
  plugins: [],
};

export default config;
