module.exports = {
    title: "Aprende Vuepress",
    description: "Lo mejor para documentar!",
    dest: "docs",
    base: "/aprende-vuepress/",
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
    ],
    themeConfig: {
        editLinks: false,
        editLinkText: "",
        lastUpdated: false,
        smoothScroll: true,
        nav: [
            {
                text: "Guía",
                link: "/",
            },
            {
                text: "VuePress",
                link: "https://v1.vuepress.vuejs.org",
            },
        ],
        sidebar: ["/", "/01-fundamentos/"],
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
