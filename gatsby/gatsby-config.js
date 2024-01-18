module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'http://localhost/graphql',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        background_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: `${__dirname}/src/components`,
          assets: `${__dirname}/src/assets`,
        },
      },
    },
  ],
};
