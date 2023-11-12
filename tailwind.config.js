/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cGreen:"#6ed0d3",
        cdGreen:"#5cc4cd",
      },
      backgroundImage:{
      heroPattern:"url('src/assets/Pics/Logo/384484119_763470438921593_536146005452694962_n.jpg')",
      }
  },
  plugins: [],
}

}