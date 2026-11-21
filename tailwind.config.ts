import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FCFAF7",
          100: "#F8F4EE",
          200: "#F2EBE1",
          300: "#E7DC CE",
          400: "#D8C7B5",
          DEFAULT: "#FAF6F0",
        },
        brown: {
          50: "#F7F5F3",
          100: "#EDE7E2",
          200: "#D9CDC4",
          300: "#BEACA0",
          400: "#9C8474",
          500: "#7A6354",
          600: "#5E4A3D",
          700: "#44352C",
          800: "#2D221C",
          900: "#1C1410",
          950: "#120C09",
          DEFAULT: "#241812",
        },
        terracotta: {
          50: "#FDF4F0",
          100: "#FCE7DF",
          200: "#F8CEC0",
          300: "#F2AD97",
          400: "#DE7A5A",
          500: "#C85A32",
          600: "#B44823",
          700: "#96381A",
          800: "#7B2F17",
          900: "#652816",
          DEFAULT: "#C85A32",
        },
        accent: {
          gold: "#B88746",
          sand: "#E5DDD3",
          warmGray: "#6E625A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        arabic: ["var(--font-arabic)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(36, 24, 18, 0.05), 0 2px 6px -1px rgba(36, 24, 18, 0.03)",
        "card-hover": "0 12px 30px -4px rgba(36, 24, 18, 0.08), 0 4px 12px -2px rgba(36, 24, 18, 0.04)",
        "elevated": "0 20px 40px -8px rgba(36, 24, 18, 0.12)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        pulseSubtle: "pulseSubtle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
