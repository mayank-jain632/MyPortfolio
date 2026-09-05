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
          400: "#e3b567",
          500: "#c99a44",
          600: "#a97e33"
        }
      },
      boxShadow: {
        glow: "0 4px 20px rgba(201, 154, 68, 0.25)"
      },
      backgroundImage: {
        "radial-dots": "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.3) 1px, transparent 0)"
      }
    }
  },
  plugins: []
}
