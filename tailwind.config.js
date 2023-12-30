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
        "custom-light-grey": "#9B9B9B",
      },
      screens: {
        xs: "400px",
        sm: "200px",
      },

      fontFamily: {
        "lexend-exa": ["Lexend Exa", "sans-serif"],
      },

      lineHeight: {
        34: "34px",
      },

      backgroundImage: {
        "header-pattern":
          "url(' https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/139/original/Rectangle_40.jpg?1701100078')",
        "header-bottom":
          "url(' https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/140/original/Rectangle_41.jpg?1701100194')",
      },
    },
  },
  plugins: [],
};
