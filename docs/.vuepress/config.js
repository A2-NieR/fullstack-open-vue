var { path } = require('@vuepress/utils');

module.exports = {
  bundler: '@vuepress/vite',
  bundlerConfig: {
    // vite bundler options
  },
  plugins: [
    '@vuepress/plugin-search',
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components')
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Fullstack Open - Vue Edition',
      description:
        'Learn Vue, Vuex, Node.JS, MongoDB, GraphQL and TypeScript in one go! This course will introduce you to modern JavaScript-based web development. The main focus is on building single page applications with Vue.JS that use REST APIs built with Node.JS.'
    }
  },
  head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
  themeConfig: {
    logo: '/images/logo.png',
    logoDark: '/images/logoDark.png',
    locales: {
      '/': {
        selectLanguageName: 'English'
      }
    },
    navbar: [
      {
        text: 'Course content',
        link: '/content.html'
      },
      {
        text: 'About course',
        link: '/about.html'
      }
    ],
    contributors: false,
    lastUpdated: false
  }
};
