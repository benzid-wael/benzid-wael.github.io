import { defineConfig } from "vitepress";

const github = "https://github.com/benzid-wael";
const sponsor = "https://github.com/sponsors/benzid-wael";
const linkedin = "https://www.linkedin.com/in/bwael";

// Simple Icons "githubsponsors" heart, used for the Sponsor social link.
const heartIcon =
  '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sponsor</title><path d="M17.625 1.499c-2.32 0-4.354 1.203-5.625 3.03-1.271-1.827-3.305-3.03-5.625-3.03C3.129 1.499 0 4.253 0 8.249c0 4.275 3.068 7.847 5.828 10.227a33.14 33.14 0 0 0 5.616 3.876l.028.017.008.003-.001.003c.163.085.342.126.521.125.179.001.358-.041.521-.125l-.001-.003.008-.003.028-.017a33.14 33.14 0 0 0 5.616-3.876C20.932 16.096 24 12.524 24 8.249c0-3.996-3.129-6.75-6.375-6.75zm-.919 15.275a30.766 30.766 0 0 1-4.703 3.316l-.004-.002-.004.002a30.955 30.955 0 0 1-4.703-3.316c-2.677-2.307-5.047-5.298-5.047-8.523 0-2.754 2.121-4.5 4.125-4.5 2.06 0 3.914 1.479 4.544 3.684.143.495.596.797 1.086.796.49.001.943-.302 1.085-.796.63-2.205 2.484-3.684 4.544-3.684 2.004 0 4.125 1.746 4.125 4.5 0 3.225-2.37 6.216-5.048 8.523z"/></svg>';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wael Ben Zid El Guebsi",
  description:
    "Engineering leader in platform, security and AI. 10+ years building and scaling products, infrastructure and teams. Maker of open-source developer security tools.",

  // User site: served from the domain root, https://benzid-wael.github.io/
  base: "/",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ["README.md", "**/node_modules/**"],

  head: [
    ["meta", { name: "theme-color", content: "#0f766e" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Wael Ben Zid El Guebsi" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Engineering leader in platform, security and AI.",
      },
    ],
    ["meta", { property: "og:image", content: "https://benzid-wael.github.io/profile.jpg" }],
    ["link", { rel: "icon", href: "/profile.jpg" }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "Wael Ben Zid",

    nav: [
      { text: "Experience", link: "/experience" },
      { text: "Open source", link: "/open-source" },
      { text: "Now", link: "/now" },
      { text: "Work with me", link: "/work-with-me" },
      { text: "❤ Sponsor", link: sponsor },
    ],

    socialLinks: [
      { icon: "github", link: github },
      { icon: "linkedin", link: linkedin },
      {
        icon: { svg: heartIcon },
        link: sponsor,
        ariaLabel: "Sponsor on GitHub",
      },
    ],

    footer: {
      message: `<a href="${sponsor}">Sponsor my open-source work ❤</a>`,
      copyright: "© Wael Ben Zid El Guebsi",
    },

    outline: { level: [2, 3] },
  },
});
