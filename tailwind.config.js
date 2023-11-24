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
      },
      flexShrink: {
        0: "0",
      },
    },
  },
  plugins: [],
};
