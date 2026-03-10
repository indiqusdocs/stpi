// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ananta Cloud Technical Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://docs.ananta.stpi.in',
  baseUrl: '/',

  organizationName: '',
  projectName: '',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://fonts.cdnfonts.com/css/aptos',
      rel: 'stylesheet',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false, // ✅ disables blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
		indexBlog: false, // ✅ this stops it from trying to load the blog
      },
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    image: 'img/ananta-social-card.png',
    navbar: {
      title: '',
      logo: {
        alt: 'Ananta',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebar1',
          label: 'Docs',
          position: 'left',
        },
		{
          href: '/pdf/UserGuide.pdf',
          label: 'Download PDF',
          position: 'right',
		  className: 'button button--primary',
          target: '_blank',
        },
		{
          href: 'https://portal.ananta.stpi.in',
          label: 'Ananta Cloud',
          position: 'right',
          className: 'button button--primary',
        },
		{ type: 'search', position: 'right' }, // KEEP RIGHT

      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
