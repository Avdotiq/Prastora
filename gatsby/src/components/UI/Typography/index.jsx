import * as React from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../Theme';
import { Breakpoint } from '../Grid';

const style = css`
  margin: 0;
  font-weight: 700;
  line-height: 1.25;
  color: ${Colors.primary};
  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: 28px;
          ${Breakpoint.lg} {
            font-size: 32px;
          }
        `;
      case 'h2':
        return css`
          font-size: 26px;
          ${Breakpoint.lg} {
            font-size: 28px;
          }
        `;
      case 'h3':
        return css`
          font-size: 24px;
          ${Breakpoint.lg} {
            font-size: 24px;
          }
        `;
      case 'h4':
        return css`
          font-size: 22px;
          ${Breakpoint.lg} {
            font-size: 22px;
          }
        `;
      default:
        return css`
          color: ${Colors.primary_dark};
          font-size: 16px;
          font-weight: 400;
        `;
    }
  }}
`;

const Typography = styled(({ children, variant, ...props }) => {
  switch (variant) {
    case 'h1':
      return <h1 {...props}>{children}</h1>;
    case 'h2':
      return <h2 {...props}>{children}</h2>;
    case 'h3':
      return <h3 {...props}>{children}</h3>;
    case 'h4':
      return <h4 {...props}>{children}</h4>;
    default:
      return <p {...props}>{children}</p>;
  }
})`
  ${style}
`;

export default Typography;
