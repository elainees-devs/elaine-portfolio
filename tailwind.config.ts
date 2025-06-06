import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
         montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: "#0099ff",
        secondary: "#feba3e",
        navy: "#0f1721",
        slateblue: "#132c45",
        customBlueGray: "#9199a7",
        tealAccent: "#00c6b8",
      },
    },
  },
  corePlugins: {
    preflight: false, 
  },
  plugins: [],
};

export default config;
