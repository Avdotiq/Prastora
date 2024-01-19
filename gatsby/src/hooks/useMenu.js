import { useStaticQuery, graphql } from 'gatsby';

export const useMenu = () => {
  const data = useStaticQuery(graphql`
    {
      allWpMenu {
        nodes {
          menuItems {
            nodes {
              uri
              label
            }
          }
        }
      }
    }
  `);

  return data.allWpMenu.nodes[0].menuItems?.nodes;
};
