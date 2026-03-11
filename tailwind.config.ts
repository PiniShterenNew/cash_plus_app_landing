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
        base: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
        },

        primary: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },

        accent: {
          500: "#22C55E",
          600: "#16A34A",
        },

        deep: {
          700: "#065F46",
          800: "#064E3B",
        },

        ink: {
          900: "#0F172A",
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
        nav: "0 1px 8px rgba(0,0,0,0.06)",
        brand: "0 10px 35px rgba(16,185,129,0.25)",
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
