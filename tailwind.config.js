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
      heroPattern:"url('/src/assets/Pics/Logo/Fabric 150x150cm copy.jpg')",
      }
  },
  plugins: [],
}

}