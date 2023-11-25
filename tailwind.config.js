/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-blue": "#089BD9",
        "light-blue": "#E2EDF1",
        "custom-bg": "var(--Blue, #2B59FF)",
      },
      colors: {
        "custom-blue": "#089BD9",
        "custom-grey": "#EDEDED",
        "custom-purple": "#A162F7",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
