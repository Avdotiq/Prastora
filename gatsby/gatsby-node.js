/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require(`path`);
const slash = require(`slash`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allWpPage {
        nodes {
          id
          uri
        }
      }
      allWpPost(sort: {date: DESC}) {
        edges {
          node {
            id
            slug
            uri
            status
            title
            date(formatString: "DD.MM.YYYY")
            year: date(formatString: "YYYY")
            month: date(formatString: "MM")
            day: date(formatString: "DD")
            content
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { allWpPage, allWpPost } = result.data;
  const pageTemplate = path.resolve(`./src/templates/page.js`);
  const postTemplate = path.resolve(`./src/templates/singlePost.js`);
  const blogTemplate = path.resolve(`./src/templates/blog.js`);

  allWpPage.nodes.forEach(page => {
    createPage({
      path: `${page.uri}`,
      component: slash(pageTemplate),
      context: {
        id: page.id,
      },
    });
  });

  allWpPost.edges.forEach(edge => {
    createPage({
      path: `blog${edge.node.uri}`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  });
}

