import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/demo/",
  "/step-guide/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/about-china/",
    children: [
      {
        text: "Something about China",
        icon: "lightbulb",
        prefix: "culture/",
        children: ["culture", { text: "test1", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Something about Chinese",
        icon: "lightbulb",
        prefix: "people/",
        children: ["people", { text: "test2", icon: "ellipsis", link: "#" }],
      },
    ],
  },
]);
