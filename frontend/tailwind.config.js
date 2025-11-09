/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors
        primary: {
          dark: "#059669", // Dark Emerald (Hover states)
          DEFAULT: "#10B981", // Emerald Green (Brand)
          light: "#34D399", // Light emerald
          soft: "#ECFDF5", // Light emerald tint (gradient backgrounds)
        },
        accent: {
          DEFAULT: "#A3E635", // Lime Green (Success, Self-Care, Progress)
        },
        warning: {
          DEFAULT: "#FACC15", // Amber (Primary Care)
        },
        risk: {
          DEFAULT: "#FB923C", // Orange (Semi-Emergency)
        },
        critical: {
          DEFAULT: "#EF4444", // Red (Emergency)
        },
        background: {
          DEFAULT: "#F9FAFB", // Soft White (Neutral Background)
          light: "#FFFFFF",
        },
        textPrimary: "#1E293B", // Slate (Primary Text)
        textSecondary: "#64748B", // Gray (Secondary Text)
        triage: {
          selfCare: "#A3E635", // Lime Green
          primaryCare: "#FACC15", // Amber
          semiEmergency: "#FB923C", // Orange
          emergency: "#EF4444", // Red
        },
        // Triage Model Card Colors
        triageCard: {
          selfCare: "#D1FAE5", // Soft mint
          primaryCare: "#FEF9C3", // Pale amber
          semiEmergency: "#FFEDD5", // Soft peach
          emergency: "#FEE2E2", // Gentle pink
          border: "#E2E8F0", // Unified SaaS border
        },
      },
      fontFamily: {
        sans: ["Inter", "Work Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "emerald-glow": "0 0 0 3px rgba(16,185,129,0.3)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1E293B",
            maxWidth: "none",
            h1: {
              color: "#1E293B",
              fontWeight: "700",
            },
            h2: {
              color: "#1E293B",
              fontWeight: "700",
            },
            h3: {
              color: "#1E293B",
              fontWeight: "600",
            },
            p: {
              color: "#64748B",
            },
            a: {
              color: "#10B981",
              "&:hover": {
                color: "#059669",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
