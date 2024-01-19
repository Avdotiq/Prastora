import * as React from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../Theme';
import { Link } from 'gatsby';

const style = css`
  width: fit-content;
  padding: 2px 10px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  ${({ name }) => {
    switch (name) {
      case 'Wellness':
        return css`
          color: ${Colors.cat_tx};
          background-color: ${Colors.cat_bg};
        `;
      case 'Hobbies':
        return css`
          color: ${Colors.cat2_tx};
          background-color: ${Colors.cat2_bg};
        `;
      case 'Garden':
        return css`
          color: ${Colors.cat3_tx};
          background-color: ${Colors.cat3_bg};
        `;
      case 'Handmade':
        return css`
          color: ${Colors.cat4_tx};
          background-color: ${Colors.cat4_bg};
        `;
      default:
        return css`
          display: none;
        `;
    }
  }}
`;

const Category = styled(({ link, name, ...props }) => (
  <Link to={link} {...props}>
    {name}
  </Link>
))`
  ${style}
`;

export default Category;
