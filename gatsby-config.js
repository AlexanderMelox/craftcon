module.exports = {
  siteMetadata: {
    title: `Craftcon`,
    // TODO: Add craftcon description
    description: `No bödget, plz fund craftcon`,
    author: `Alexander Melo`,
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
    `gatsby-plugin-emotion`,
  ],
};
