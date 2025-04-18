import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import daisyui from 'daisyui';

export default {
  plugins: [tailwindcss, autoprefixer, daisyui],
  content: ['./src/**/*.{js,jsx,ts,tsx}']
}
