import { defineConfig } from 'vitepress';


export default defineConfig({
  title: 'Ignyte Platform Docs',
  description: 'Compliance docs made easier',
  head: [
    ['link', { rel: 'icon', href: '/White_Ignyte-Logo.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Ignyte Docs' }],
  ],
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/White_Ignyte-Logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ignyte-Assurance-Platform' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/ignyte-platform' },
      { icon: 'youtube', link: 'https://www.youtube.com/c/IgnyteAssurancePlatform' },
    ],
    editLink: {
      pattern: 'https://github.com/Ignyte-Assurance-Platform/support/blob/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Made with ❤️ by Team Ignyte',
      copyright: 'Copyright © 2024 Ignyte, Inc. All Rights Reserved.',
    },
    search: {
      provider: 'local',
    },
    outline: 'deep',
  },
});
