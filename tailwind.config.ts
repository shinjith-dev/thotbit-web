const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1.75rem",
        md: "2rem",
        lg: "2.5rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
      colors: {
        background: "hsl(var(--col-background) / <alpha-value>)",
        surface: "hsl(var(--col-surface) / <alpha-value>)",
        overlay: "hsl(var(--col-overlay) / <alpha-value>)",
        muted: "hsl(var(--col-muted) / <alpha-value>)",
        subtle: "hsl(var(--col-subtle) / <alpha-value>)",
        fg: "hsl(var(--col-fg) / <alpha-value>)",
        accent: "hsl(var(--col-accent) / <alpha-value>)",
        "accent-fg": "hsl(var(--col-accent-fg) / <alpha-value>)",
        primary: "hsl(var(--col-primary) / <alpha-value>)",
        "primary-fg": "hsl(var(--col-primary-fg) / <alpha-value>)",
        secondary: "hsl(var(--col-secondary) / <alpha-value>)",
        "secondary-fg": "hsl(var(--col-secondary-fg) / <alpha-value>)",
        destructive: "hsl(var(--col-destructive) / <alpha-value>)",
        "destructive-fg": "hsl(var(--col-destructive-fg) / <alpha-value>)",
        border: "hsl(var(--col-border) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
