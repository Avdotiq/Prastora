import * as React from 'react';
import { graphql } from 'gatsby';
import { renderBlock } from '../helpers/renderBlock';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Page = ({ data }) => {
  const Components = data.allWpPage.nodes[0].components.components;

  return (
    <Layout>
      {Components &&
        Components.map((item) => (
          <React.Fragment key={item.fieldGroupName}>
            {renderBlock(item)}
          </React.Fragment>
        ))}
    </Layout>
  );
};

export const Head = () => <Seo title='Using DSG' />;

export default Page;

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    allWpPage(filter: { id: { eq: $id } }) {
      nodes {
        id
        databaseId
        uri
        title
        isFrontPage
        components {
          components {
            ... on WpPage_Components_Components_PopularPosts {
              fieldGroupName
              ...PopularPosts
            }
            ... on WpPage_Components_Components_AdvertisementPost {
              fieldGroupName
              ...AdvertisementPost
            }
          }
        }
      }
    }
  }
`;
