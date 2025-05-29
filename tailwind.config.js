import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "dark-red": "#b91c1c",
        "darker-red": "#7f1d1d",
        "neu-bg": "#f8f8f8",
      },
    },
  },
  plugins: [tailwindcss, autoprefixer, daisyui],
};
