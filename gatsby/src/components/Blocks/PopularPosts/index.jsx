import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Post from '../../Post';
import { Breakpoint } from '../../UI/Grid';
import Typography from '../../UI/Typography';

const PopularPosts = ({ data }) => {
  const { posts } = data;
  console.log(posts);
  return (
    <StyledPopolarPosts>
      <Typography variant='h3'>Recent blog posts</Typography>
      <StyledPosts>
        {posts && posts.map((posts) => <Post data={posts.post} />)}
      </StyledPosts>
    </StyledPopolarPosts>
  );
};

export default PopularPosts;

const StyledPopolarPosts = styled.div`
  padding: 30px 0;
`;

const StyledPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin-top: 32px;
  ${Breakpoint.lg} {
    grid-template-columns: 1fr 1fr;
  }

  & > a:nth-of-type(2),
  & > a:nth-of-type(3) {
    ${Breakpoint.sm} {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      column-gap: 24px;

      div:nth-of-type(1) {
        height: 100%;
        width: 100%;
      }
    }
  }

  & > a:first-child {
    grid-row: span 2;
  }
`;

export const query = graphql`
  fragment PopularPosts on WpPage_Components_Components_PopularPosts {
    heading
    posts {
      post {
        ... on WpPost {
          title
          link
          id
          excerpt
          date
          featuredImage {
            node {
              localFile {
                publicURL
              }
            }
          }
          categories {
            nodes {
              name
              link
              id
            }
          }
        }
      }
    }
  }
`;
