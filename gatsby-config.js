module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "myportfolio",
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: './src/images/gatsby-icon.png'
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark"
  ],
};
