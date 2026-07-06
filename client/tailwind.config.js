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
        ink: "#0F172A",
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Roboto", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(11, 37, 69, 0.06), 0 4px 16px rgba(11, 37, 69, 0.04)",
        lift: "0 12px 40px rgba(11, 37, 69, 0.12)",
        soft: "0 2px 8px rgba(11, 37, 69, 0.05)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
