/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "top-light":
          "radial-gradient(ellipse 40% 50% at 50% 0, rgba(107, 114, 128, 0.6), transparent)",
        "light-effect":
          "radial-gradient(ellipse 40% 40% at 70% 80%, rgba(31, 41, 55, 0.6), transparent)",
      },
      colors: {
        "cod-gray": "#0f0f0f",
        "zendesk-cyprus": {
          50: "#effefd",
          100: "#c8fffc",
          200: "#90fff8",
          300: "#51f7f4",
          400: "#1de2e4",
          500: "#05c1c7",
          600: "#009aa1",
          700: "#057980",
          800: "#0a5e65",
          900: "#0e4d53",
          950: "#00363d",
        },
        nus: {
          50: "#fffbea",
          100: "#fff3c5",
          200: "#ffe687",
          300: "#ffd348",
          400: "#ffbe1e",
          500: "#fc9c04",
          600: "#ef7c00",
          700: "#b94f04",
          800: "#963d0a",
          900: "#7b320c",
          950: "#471801",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(~var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
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
        "border-spin": {
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "border-spin": "border-spin 7s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
