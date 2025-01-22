/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, #FFFFFF, #000000, #0C0C0D, #131315, #17191B, #1C1E20, #2A2D31, #5F636C, #6B707A, #777D87, #92969F, #ADB0B7)",
      },
    },
  },
  plugins: [],
};

