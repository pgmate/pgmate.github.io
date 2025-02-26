import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  trailingSlash: false,
  title: "PGMate",
  tagline: "Postgres is Developers' Best Friend",
  favicon: "img/favicon/pgmate.ico",

  // Set the production url of your site here
  url: "https://pgmate.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pgmate", // Usually your GitHub org/user name.
  projectName: "pgmate", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/pgmate/pgmate.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom", "json"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/pgmate/pgmate.github.io/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/pgmate-social-card.png",
    navbar: {
      title: "PGMate",
      logo: {
        alt: "PGMate",
        src: "img/pgmate-logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/pgmate/pgmate.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Contents",
          items: [
            {
              label: "Docs",
              to: "/docs/intro",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "Contribute",
          items: [
            {
              label: "Contribute to PGMate Client",
              href: "https://github.com/pgmate/pgmate",
            },
            {
              label: "Add content to PGMate",
              href: "https://github.com/pgmate/contents",
            },
            {
              label: "Edit this website",
              href: "https://github.com/pgmate/pgmate.github.io",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Try it online! (no credentials, no credit card)",
              href: "https://gitpod.io/#https://github.com/pgmate/demo",
            },
            {
              label: "Star on GitHub",
              href: "https://github.com/pgmate/pgmate",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PGMate, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    copyCode: true,
  } satisfies Preset.ThemeConfig,
};

export default config;
