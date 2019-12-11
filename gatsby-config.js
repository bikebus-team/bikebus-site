require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Bikebus`,
    description: `Bikebus is a unique, high-energy fitness experience that offers indoor cycling sessions as you travel around the city.`,
    author: `@ScoutNU`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bikebus_mark.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
          typeName: "TS",
          fieldName: "takeshape",
          // Url to query from
          url: `https://api.takeshape.io/project/${process.env.TAKESHAPE_PROJECT}/graphql`,
          // HTTP headers
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.TAKESHAPE_TOKEN}`,
          },
          // Additional options to pass to node-fetch
          fetchOptions: {},
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
