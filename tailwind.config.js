/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["SF Pro Display", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        accent: {
          500: "#38bdf8",
          600: "#0ea5e9"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.4)"
      },
      backgroundImage: {
        "radial-dots": "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.3) 1px, transparent 0)"
      }
    }
  },
  plugins: []
}
