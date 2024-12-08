/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerOne: "url('/src/assets/assets/1363751.jpeg')",
        bannerTwo: "url('/src/assets/assets/940922.jpg')",
        BannerThree:
          "url('/src/assets/assets/wallpaperflare.com_wallpaper (5).jpg')",
        BannerFour:
          "url('/src/assets/assets/godzilla_x_kong_the_new_empire_wallpaper_hd_vs_by_andrewvm_dh54g8x-pre.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
