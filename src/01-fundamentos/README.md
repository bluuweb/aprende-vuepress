# Fundamentos

- [Vuepress v1](https://v1.vuepress.vuejs.org/)

## Instalación

```sh
yarn create vuepress-site [optionalDirectoryName]
```

```sh
cd docs
yarn install
yarn dev
```

## .vuepress
config.js
```js
module.exports = {
    title: "Vuepress con bluuweb",
    description: "Lo mejor para documentar!",
    dest: "docs",
    base: '/aprende-vuepress/',
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
                text: "Youtube",
                link: "https://youtube.com/bluuweb",
            },
            {
                text: "Curso Vue.js",
                link: "http://curso-vue-js-udemy.bluuweb.cl",
            },
            {
                text: "Curso React.js",
                link: "http://curso-react-js-udemy.bluuweb.cl",
            },
            {
                text: "Curso Bootstrap",
                link: "http://curso-bootstrap-4-udemy.bluuweb.cl",
            },
        ],
        sidebar: ["/", "/01-fundamentos/"],
    },

    plugins: ["@vuepress/plugin-back-to-top"],
};
```