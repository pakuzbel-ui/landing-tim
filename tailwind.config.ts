import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#06111F",
        surface: "#0C1B2D",
        "surface-muted": "#12263D",
        primary: "#FFD33D",
        "primary-deep": "#F4B400",
        accent: "#00AEEF",
        line: "rgba(255,255,255,0.1)",
        copy: "#F5F7FA",
        "copy-muted": "#A8B7C9",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 211, 61, 0.12), 0 24px 70px rgba(0, 174, 239, 0.18)",
        card: "0 24px 70px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(0,174,239,0.18), transparent 26%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Space Grotesk", "Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
