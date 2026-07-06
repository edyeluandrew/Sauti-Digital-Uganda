/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        /* Lake Navy — trust, governance, Lake Victoria depth */
        navy: {
          DEFAULT: "#062339",
          light: "#0C3D5C",
          mid: "#134E75",
        },
        /* Savanna Gold — Uganda flag yellow, refined for UI */
        gold: {
          DEFAULT: "#E5A100",
          light: "#F5C842",
          dark: "#B87D00",
          tint: "#FFF8E8",
        },
        /* Nile Teal — youth energy, digital civic accent */
        teal: {
          DEFAULT: "#0A8F7A",
          light: "#E6F5F2",
          dark: "#066B5C",
        },
        /* Warm earth neutrals */
        cream: {
          DEFAULT: "#FAF7F2",
          dark: "#F0EAE0",
        },
        ink: "#152432",
        muted: "#5A6775",
        /* Legacy alias */
        slate: "#152432",
        "navy-light": "#0C3D5C",
        success: "#147A4A",
        alert: "#C62828",
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Roboto", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(6, 35, 57, 0.07), 0 4px 16px rgba(6, 35, 57, 0.05)",
        lift: "0 12px 40px rgba(6, 35, 57, 0.14)",
        soft: "0 2px 8px rgba(6, 35, 57, 0.06)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
