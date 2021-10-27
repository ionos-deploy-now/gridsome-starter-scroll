// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: process.env.SITE_NAME || "Gridsome Starter",
  siteDescription: process.env.SITE_DESCRIPTION || "Lorem ipsum ...",
  siteUrl: process.env.SITE_URL,
  pathPrefix: process.env.PATH_PREFIX,
  metadata: {
    author: process.env.AUTHOR || "John Doe",
    github: process.env.GITHUB_URL || "https://github.com/octocat",
    linkedin: process.env.LINKEDIN_URL || "https://www.linkedin.com/in/john-doe",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        remark: {},
      },
    },
    {
      use: "gridsome-plugin-windicss",
      options: {
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        include: ["/", "/blog/**"],
      },
    },
  ],
  transformers: {
    remark: {
      plugins: [
        [
          "remark-autolink-headings",
          {
            behavior: "wrap",
            linkProperties: {
              ariaHidden: "true",
              tabIndex: -1,
            },
          },
        ],
      ],
    },
  },
}
