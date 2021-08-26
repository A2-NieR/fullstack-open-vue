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
      title: 'Fullstack Open - Vue Edition'
    }
  },
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
    ]
  }
};
