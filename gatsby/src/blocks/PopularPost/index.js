import * as React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

const PopularPost = ({ data }) => {
  const { posts } = data;
  console.log(posts);
  return (
    <StyledPosts>
      {posts && posts.map(posts => (
        <StyledPost key={posts.post.id} to={posts.post.link}>
          <h2>{posts.post.title}</h2>
        </StyledPost>
      ))}
    </StyledPosts>
  );
};

export default PopularPost;

const StyledPosts = styled.div``;

const StyledPost = styled(Link)`
`;

export const query = graphql`
  fragment PopularPost on WpPage_Components_Components_PopularPost {
    posts {
      post {
        ... on WpPost {
          title
          link
          id
          featuredImage {
            node {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`;
