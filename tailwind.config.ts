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
        background: "#060606",
        surface: "#12100A",
        "surface-muted": "#1A160C",
        primary: "#FFD200",
        "primary-deep": "#F0B90B",
        accent: "#F5B000",
        line: "rgba(255,255,255,0.1)",
        copy: "#F5F7FA",
        "copy-muted": "#C0CBD8",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 210, 0, 0.16), 0 24px 70px rgba(245, 176, 0, 0.18)",
        card: "0 24px 70px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(255,210,0,0.2), transparent 26%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
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
