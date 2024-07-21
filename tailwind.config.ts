const { fontFamily } = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: {
        "site-outer": "#141c2c",
        "site-main": "#192237",
        "site-light-grey": "#2F374B",
        "site-btn-green": "#097065",
      },
      colors: {
        "site-color": "#fff",
        "site-outer": "#141c2c",
        "site-main": "#192237",
        "site-btn-green": "#097065",
        "muted-foreground": "#d9d9d9",
      },
      ring: {
        "site-color": "#fff",
        "site-outer": "#141c2c",
        "site-main": "#192237",
        "site-btn-green": "#097065",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
