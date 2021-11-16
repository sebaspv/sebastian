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
        icon: './src/images/icon.png'
      },
      __key: "pages",
    },
  ],
};
