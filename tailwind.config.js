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
    },
  },
  plugins: [],
};
