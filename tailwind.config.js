/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#00CBD5",
          hover: "#00b6c0",
        },
      },
      zIndex: {
        modal: 1000,
        preview: 1100,
        toast: 9999,
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
