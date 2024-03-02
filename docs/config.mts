import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ignyte Platform Docs",
  description: "Compliance docs made easier",
  head: [
    ["link", { rel: "icon", href: "/White_Ignyte-Logo.png" }],
    [
      "script",
      { id: "hotjar" },
      `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3740863,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
    ],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "Ignyte Docs" }],

  ],
  ignoreDeadLinks: [
    // ignore all localhost links
    /^https?:\/\/localhost/,
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    logo: {
      light: "/logo-light.svg",
      dark: "/logo-dark.svg",
      alt: "White_Ignyte-Logo.png",
    },
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Examples", link: "/markdown-examples" },
    // ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Getting Started", link: "/getting-started" },
          { text: "Release Notes", link: "/release-notes" },
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Installation",
        items: [
          { text: "Deployment Options", link: "/deployment-options" },
          { text: "Application Architecture", link: "/app-architecture" },
          { text: "The Ignyte Installer", link: "/ppi" },
          {
            text: "Installation Examples",
            collapsed: true,
            items: [
              { text: "Helm on Azure", link: "/deploy-helm-azure" },
              { text: "Embedded in AWS", link: "/deploy-embedded-aws" },
              { text: "EKS in AWS", link: "/deploy-eks-aws" },
            ],
          },
          {
            text: "Login Options",
            collapsed: true,
            items: [
              { text: "Overview", link: "/login-options" },
              { text: "Microsoft SSO", link: "/login-microsoft" },
              { text: "Okta SSO", link: "/login-okta" },
            ],
          },
          { text: "Embedded DB Backup", link: "/embedded-db-backup" },
          { text: "Users and Teams", link: "/users" },
          { text: "UAT", link: "/uat" },
        ],
      },
      {
        text: "User Guides",
        items: [
          { text: "Risk Solutions", link: "/risk-solutions" },
          { text: "Smart Text & Mentions", link: "/smart-text" },
          { text: "Inheritance", link: "/inheritance" },
          { text: "Reviews", link: "/reviews" },
          { text: "Projects", link: "/projects" },
          { text: "Security Objectives", link: "/objectives" },
          { text: "Controls", link: "/controls" },
          { text: "Key Contacts", link: "/contacts" },
          { text: "Project Overview", link: "/diagrams" },
          { text: "Attachments", link: "/attachments" },
          { text: "Document Robot", link: "/document-robot" },
          { text: "OSCAL", link: "/oscal" },
          { text: "Migrate to Rev5", link: "/migrate-fedramp" },
          { text: "FAQ by Document", link: "/documents/faq" },
        ],
      },
    ],
    lastUpdated: {},
    socialLinks: [
      { icon: "github", link: "https://github.com/Ignyte-Assurance-Platform" },
      { icon: "linkedin", link: "https://www.linkedin.com/company/ignyte-platform" },
      { icon: "youtube", link: "https://www.youtube.com/c/IgnyteAssurancePlatform" },
    ],
    editLink: {
      pattern: "https://github.com/Ignyte-Assurance-Platform/support/blob/main/docs/:path",
    },
    footer: {
      message: "Made with ❤️ by Team Ignyte",
      copyright: "Copyright © 2023 Ignyte, Inc. All Rights Reserved.",
    },
    search: {
      provider: "local",
    },
    outline: "deep",
  },
});

/**
 * Install with Kubenertes
 * Install with Helm
 * Instlall as Virtual Appliance
 * Install in Azure AKS (KOTS)
 * Install in AWS EKS (KOTS)
 * Install in Google GKE (KOTS)
 * Install in Azure with Helm
 * Install in AWS with Helm
 * Install in Google with Helm
 * Install emebedded in AWS EC2 KURL
 * Install embedded in Azure Compute (KURL)
 * Install embedded in Google Compute (KURL)
 *
 *
 */