/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      lightDark: "rgba(0, 0, 0, 0.5)",
      dark05: "#0C0C0D",
      darak06: "#92969F",
      dark08: "#131315",
      dark10: "#17191B",
      dark12: "1C1E20",
      dark18: "#2A2D31",
      dark40: "#5F636C",
      dark45: "#6B707A",
      dark50: "#777D87",
      dark60: "#0C0C0D",
      dark70: "#17191B",
    },
    extend: {
      boxShadow: {
        "4xl": "0 16px 30px 0 rgba(0, 0, 0, 1)",
      },
      backgroundImage: {
        // "gradient-radial":
        //   "radial-gradient(circle, #FFFFFF, #000000, #0C0C0D, #131315, #17191B, #1C1E20, #2A2D31, #5F636C, #6B707A, #777D87, #92969F, #ADB0B7)",
        "custom-gradient":
          "linear-gradient(90deg, #000000, transparent 20%, transparent 80%, #000000)",
        "custom-gradient2": "linear-gradient(90deg, #000000, transparent 70%, transparent 100%)"
      },
    },
  },
  plugins: [],
};

