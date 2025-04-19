import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [tailwindcss, autoprefixer, daisyui],
};
