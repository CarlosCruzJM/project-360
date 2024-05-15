import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        'negro-azabache':'#2c2c2c',
        'rojo-cereza':'#ff0000',
        'gris':'#A2A1A1',
      },
      fontFamily: {
        gurajada: ['Gurajada', 'sans-serif'],
        gugi: ['Guji', 'sans-serif'],
      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [flowbite.plugin(),],
}