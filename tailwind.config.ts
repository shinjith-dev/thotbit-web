const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
      colors: {
        input: "hsl(var(--col-overlay) / <alpha-value>)",
        ring: "hsl(var(--col-overlay) / <alpha-value>)",
        foreground: "hsl(var(--col-fg) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--col-primary) / <alpha-value>)",
          foreground: "hsl(var(--col-primary-fg) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--col-secondary) / <alpha-value>)",
          foreground: "hsl(var(--col-secondary-fg) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--col-destructive) / <alpha-value>)",
          foreground: "hsl(var(--col-destructive-fg) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--col-muted) / <alpha-value>)",
          foreground: "hsl(var(--col-background) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--col-accent) / <alpha-value>)",
          foreground: "hsl(var(--col-accent-fg) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--col-overlay) / <alpha-value>)",
          foreground: "hsl(var(--col-fg) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--col-surface) / <alpha-value>)",
          foreground: "hsl(var(--col-subtle) / <alpha-value>)",
        },

        background: "hsl(var(--col-background) / <alpha-value>)",
        surface: "hsl(var(--col-surface) / <alpha-value>)",
        overlay: "hsl(var(--col-overlay) / <alpha-value>)",
        subtle: "hsl(var(--col-subtle) / <alpha-value>)",
        fg: "hsl(var(--col-fg) / <alpha-value>)",
        "accent-fg": "hsl(var(--col-accent-fg) / <alpha-value>)",
        "primary-fg": "hsl(var(--col-primary-fg) / <alpha-value>)",
        "secondary-fg": "hsl(var(--col-secondary-fg) / <alpha-value>)",
        "destructive-fg": "hsl(var(--col-destructive-fg) / <alpha-value>)",
        border: "hsl(var(--col-border) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
