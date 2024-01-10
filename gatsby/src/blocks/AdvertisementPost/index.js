import * as React from 'react';
import { graphql } from 'gatsby';

const AdvertisementPost = ({ data }) => {
  console.log(data);
  return (
    <>
      <h1>404: Not Found</h1>
      <p>PopularPost</p>
    </>
  );
};

export default AdvertisementPost;

export const query = graphql`
  fragment AdvertisementPost on WpPage_Components_Components_AdvertisementPost {
    post {
      ... on WpPost {
        id
        link
        title
      }
    }
  }
`;
