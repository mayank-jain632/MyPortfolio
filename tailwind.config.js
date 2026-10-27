/** @type {import('tailwindcss').Config} */

// Tokens are defined in src/index.css. This file only maps them.
const channel = (name) => `oklch(var(--color-${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: channel("canvas"),
        surface: channel("surface"),
        raised: channel("raised"),
        fg: {
          DEFAULT: channel("fg"),
          muted: channel("fg-muted"),
          subtle: channel("fg-subtle"),
        },
        accent: {
          DEFAULT: channel("accent"),
          ink: channel("accent-ink"),
          deep: channel("accent-deep"),
        },
        paper: channel("paper"),
        ink: channel("ink"),
        hairline: {
          DEFAULT: "var(--color-hairline)",
          strong: "var(--color-hairline-strong)",
        },
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
      fontSize: {
        micro: ["var(--text-micro)", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        sm: ["var(--text-sm)", { lineHeight: "1.5" }],
        base: ["var(--text-base)", { lineHeight: "1.6" }],
        lead: ["var(--text-lead)", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        title: ["var(--text-title)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        headline: ["var(--text-headline)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        display: ["var(--text-display)", { lineHeight: "0.95", letterSpacing: "-0.045em" }],
        hero: ["var(--text-hero)", { lineHeight: "0.88", letterSpacing: "-0.055em" }],
      },
      spacing: {
        gutter: "var(--space-gutter)",
        section: "var(--space-section)",
      },
      maxWidth: {
        content: "1200px",
        prose: "62ch",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        pill: "9999px",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        float: "var(--shadow-float)",
        accent: "var(--shadow-accent)",
      },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out-expo)",
        "out-quart": "var(--ease-out-quart)",
        "in-out": "var(--ease-in-out)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
        slow: "var(--duration-slow)",
        reveal: "var(--duration-reveal)",
      },
    },
  },
  plugins: [],
};
