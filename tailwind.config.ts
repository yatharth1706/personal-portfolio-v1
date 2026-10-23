import type { Config } from "tailwindcss"

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        night: "var(--v2-bg, #08090A)",
        fog: "var(--v2-fg, #F2F4F6)",
        mute: "var(--v2-mute, #A8B0B8)",
        dim: "var(--v2-dim, #7B848F)",
        line: "var(--v2-line, #23282E)",
        panel: "var(--v2-panel, #101214)",
        hair: "var(--v2-hair, #16191D)",
        surface: "var(--v2-card, #0C0E10)",
        strip: "var(--v2-wash, #0A0B0D)",
        featured: "var(--v2-featured, #0D1017)",
        inset: "var(--v2-inset, #1A1E22)",
        rail: "var(--v2-rail, #1E2429)",
        soft: "var(--v2-soft, #0E1B33)",
        softline: "var(--v2-softline, #1E3A8A)",
        accent: "var(--v2-accent, #60A5FA)",
        "accent-mid": "var(--v2-accent-mid, #93B4F7)",
        ok: "var(--v2-ok, #34D399)",
        brand: "var(--v2-brand, #1D4ED8)",
        "brand-hover": "var(--v2-brand-hover, #1E40AF)",
        "brand-bright": "var(--v2-brand-bright, #3B82F6)",
        onbrand: "var(--v2-on-brand, #F2F4F6)",
        window: "var(--v2-window, #2A2F35)",
        chipbg: "var(--v2-chip, #14171A)",
        chipline: "var(--v2-chipline, #2A3038)",
        consolebar: "var(--v2-console, #0A0C0E)",
        proof: "var(--v2-proof, #0D1526)",
        "layer-mid": "var(--v2-layer-mid, #3A434F)",
        "chart-mid": "var(--v2-chart-mid, #2F3A4A)",
        empty: "var(--v2-empty, #1E2429)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config