/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#ab1218",
      },
      screens: {
        'xl': '1140px',
        '2xl': '1320px',
        '3xl': '1536px',  // Add a custom breakpoint at 1920px
        '4xl': '2560px',  // Add a custom breakpoint at 2560px
        // Add more breakpoints as needed
      },
    },
  },
  plugins: [require("daisyui")],
};
