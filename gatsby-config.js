module.exports = {
  siteMetadata: {
    title: `Llorona`,
    siteUrl: `https://www.lalloronacantina.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `La Llorona`,
        short_name: `La Llorona`,
        description: `La cantina más trendy de la Roma Condesa`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "297118616",
      },
    },
    "gatsby-plugin-sitemap",
  ],
};
