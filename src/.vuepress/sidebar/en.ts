import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "A detailed travel guide",
      icon: "face-smile",
      prefix: "step-guide/",
      link: "step-guide/",
      children: "structure",
    },
    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    },
  ],
});
