/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        paleBlue: "hsl(225, 100%, 94%)",
        brightBlue: "hsl(245, 75%, 52%)",

        veryPaleBlue: "hsl(225, 100%, 98%)",
        desaturatedBlue: "hsl(224, 23%, 55%)",
        darkBlue: "hsl(223, 47%, 23%)",

        backGround: "rgb(248,249,254)",
      },
      backgroundImage: {
        desktop: "url('../images/pattern-background-desktop.svg')",
        mobile: "url('../images/pattern-background-mobile.svg')",
      },
    },
  },
  plugins: [],
};
