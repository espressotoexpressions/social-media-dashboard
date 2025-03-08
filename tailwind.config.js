const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html","./src/**/*.{html,js,jsx}", flowbite.content()],
  darkMode:"class",
  theme: {
    extend: {colors: {
      primary: {
        light: "#000000", 
        dark: "hsl(230, 17%, 14%)" // Dark mode primary color (blue-900)
      },
      card:{
        light: "hsl(227, 47%, 96%)",
        dark:"hsl(228, 28%, 20%)"
      },
      textheader:{
        light: "hsl(230, 17%, 14%)",
        dark:"hsl(0, 0%, 100%)"
      },
    },
  },
  },
  plugins: [flowbite.plugin()],
}

