import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            h1: {
              scrollMarginTop: "5rem",
            },
            h2: {
              scrollMarginTop: "5rem",
            },
            h3: {
              scrollMarginTop: "5rem",
            },
            h4: {
              scrollMarginTop: "5rem",
            },
            h5: {
              scrollMarginTop: "5rem",
            },
            h6: {
              scrollMarginTop: "5rem",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
