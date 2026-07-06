/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B2545",
        gold: "#F4B400",
        slate: "#1E293B",
        cream: "#F7F7F5",
        success: "#2E7D32",
        alert: "#D21034",
        "navy-light": "#1A3A5C",
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 12px rgba(11, 37, 69, 0.06)",
        lift: "0 8px 32px rgba(11, 37, 69, 0.12)",
        glass: "0 4px 24px rgba(11, 37, 69, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.65)",
        "glass-hover": "0 8px 32px rgba(11, 37, 69, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
        "glass-navy": "0 8px 32px rgba(11, 37, 69, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
