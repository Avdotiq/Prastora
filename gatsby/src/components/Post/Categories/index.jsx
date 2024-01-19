import * as React from 'react';
import styled from 'styled-components';
import Category from '../../UI/Category';

const Categories = ({ data }) => {
  return (
    <StyledCategories>
      {data.nodes.map(({ link, id, name }) => (
        <li key={id}>
          <Category link={link} name={name} />
        </li>
      ))}
    </StyledCategories>
  );
};

export default Categories;

const StyledCategories = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 24px;
`;
