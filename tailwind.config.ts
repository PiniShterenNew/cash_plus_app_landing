import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#FAFAF8",
          100: "#F5F0EA",
          200: "#E8E4DF",
        },
        mint: {
          400: "#4ECDC4",
          500: "#3DBDB5",
          600: "#2DADA5",
        },
        forest: {
          600: "#2D6A4F",
          700: "#1B4332",
        },
        ink: {
          900: "#1A1A2E",
        },
        slate: {
          400: "#94A3B8",
          500: "#64748B",
        },
      },
      fontFamily: {
        heading: ["var(--font-varela-round)", "sans-serif"],
        body: ["var(--font-rubik)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      borderRadius: {
        sm: "10px",
        card: "16px",
        "card-lg": "24px",
        "card-xl": "32px",
        btn: "9999px",
        badge: "9999px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
        card: "0 4px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.03)",
        "card-hover":
          "0 12px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.03)",
        nav: "0 1px 8px rgba(0, 0, 0, 0.06)",
        mint: "0 8px 32px rgba(78,205,196,0.2)",
      },
      letterSpacing: {
        heading: "-0.02em",
      },
      lineHeight: {
        heading: "1.2",
      },
    },
  },
  plugins: [],
};

export default config;
