import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css",
      },
    ],
  },
  publicRuntimeConfig: {
    MAPBOX_ACCESS_TOKEN: '"pk.eyJ1Ijoic2hhbmVqZWFybGV5IiwiYSI6ImNreDk2a3lpOTBjaXcydm12ZDk2c3gxeXUifQ.U2Uqnz-oOUMGpG-3_tr3ng"'
  },
});
