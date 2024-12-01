/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        kerala: "url('/src/assets/kerala.jpg')",
        kashmir: "url('/src/assets/kashmir.jpg')",
        nagaland: "url('/src/assets/nagaland.jpg')",
        maharashtra: "url('/src/assets/maharashtra.jpg')",
        madhyapradesh: "url('/src/assets/madhyapradesh.jpg')",
      },
    },
  },
  plugins: [],
};
