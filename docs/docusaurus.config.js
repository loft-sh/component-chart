__webpack_public_path__ = "/component-chart/"

module.exports = {
  title: 'Component Helm Chart | Documentation',
  tagline: 'The tagline of my site',
  url: 'https://devspace.sh',
  baseUrl: __webpack_public_path__,
  favicon: '/img/favicon.png',
  organizationName: 'devspace-cloud', // Usually your GitHub org/user name.
  projectName: 'component-chart', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      logo: {
        alt: 'DevSpace',
        src: '/img/logo-component-chart.svg',
        href: '/component-chart/docs/introduction',
      },
      links: [
        {to: 'docs/introduction', label: 'Docs', position: 'left'},
        {href: 'https://devspace.cloud/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/devspace-cloud/component-chart',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: "9d69b60ed293cfed074242922dbc2a6b",
      indexName: "devspace-component-chart",
      placeholder: "Search...",
      algoliaOptions: {}
    },
    footer: {
      style: 'light',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Component Chart Authors`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'pages',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/devspace-cloud/component-chart/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src:
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
      async: true,
    },
    {
      src:
        'https://devspace.sh/docs.js',
      async: true,
    },
  ],
};
