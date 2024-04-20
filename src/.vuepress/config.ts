import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "China Travel Guidebook",
      description: "Helping you travel without barriers in China.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "中国旅行指南",
      description: "帮助你在中国无障碍的旅行。",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
