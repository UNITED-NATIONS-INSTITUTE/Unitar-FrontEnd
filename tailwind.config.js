/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-blue": "#089BD9",
        "light-blue": "#E2EDF1",
      },
      colors: {
        "custom-blue": "#089BD9",
        "custom-grey": "#EDEDED",
      },
    },
  },
  plugins: [],
};
