/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["Fredoka", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        fade: "#767678",
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/service-page/hero.png')",
      },
    },
  },
  plugins: [],
};
