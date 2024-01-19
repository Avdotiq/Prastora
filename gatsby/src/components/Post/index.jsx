import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { format } from 'date-fns';
import Typography from '../UI/Typography/index';
import Categories from './Categories';

const Post = ({ data }) => {
  const { id, title, link, featuredImage, date, categories, excerpt } = data;
  const fullDate = format(new Date(date), 'EEEE • d MMM yyyy');
  return (
    <StyledPost key={id} to={link}>
      <StyledPreview imageUrl={featuredImage.node.localFile.publicURL} />
      <div>
        <StyledAuthor>{fullDate}</StyledAuthor>
        <StyledHeadind variant='h3'>{title}</StyledHeadind>
        <Typography dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Categories data={categories} />
      </div>
    </StyledPost>
  );
};

export default Post;

const StyledPost = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledPreview = styled.div`
  height: 50%;
  min-height: 200px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const StyledAuthor = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #6941c6;
`;

const StyledHeadind = styled(Typography)`
  padding: 12px 0;
`;
