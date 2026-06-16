/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#1e293b",
        accent: "#3b82f6",
        muted: "#64748b",
        light: "#f1f5f9",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
