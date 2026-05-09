/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      colors: {
        space: "#0c0c0a",
        surface: "#131310",
        "surface-2": "#1a1a16",
        border: "rgba(255, 248, 220, 0.06)",
        "border-hover": "rgba(255, 248, 220, 0.13)",
        text: "#e8e4d0",
        "text-muted": "#a3a08d",
        "text-faint": "#6e6b56",
        accent: "#a8ff3e",
        "accent-dim": "rgba(168, 255, 62, 0.08)",
        amber: "#f5a623",
        dot: "rgba(255, 248, 220, 0.04)",
      },
    },
  },
  plugins: [],
};