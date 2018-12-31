module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    lastUpdated: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Recipes", link: "/recipes/" }
    ],
    permalink: '/:year/:month/:day/:slug',
    repo: "pdehaan/vuepress-next-test",
    repoLabel: "GitHub",
    sidebar: [
      "/"
    ],
    sidebarDepth: 2
  }
};
