// libraries
import styled, { css } from 'styled-components';

export const Mediasize = {
  xs: 0,
  xsm: 410,
  sm: 576,
  md: 768,
  lg: 992,
  sl: 1024,
  xl: 1200,
  xxl: 1280,
  xxxl: 1440,
  hd: 1680,
};

export const Breakpoint = {
  xs: `@media (min-width: ${Mediasize.xs}px)`,
  xsm: `@media (min-width: ${Mediasize.xsm}px)`,
  sm: `@media (min-width: ${Mediasize.sm}px)`,
  md: `@media (min-width: ${Mediasize.md}px)`,
  lg: `@media (min-width: ${Mediasize.lg}px)`,
  sl: `@media (min-width: ${Mediasize.sl}px)`,
  xl: `@media (min-width: ${Mediasize.xl}px)`,
  xxl: `@media (min-width: ${Mediasize.xxl}px)`,
  xxxl: `@media (min-width: ${Mediasize.xxxl}px)`,
  hd: `@media (min-width: ${Mediasize.hd}px)`,
};

const gridVariable = {
  contentWidth: '1280px',
  desktopPadding: '32px',
  mobilePadding: '15px',
};

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: ${gridVariable.contentWidth};
  margin: 0 auto;
  padding: 0 ${gridVariable.mobilePadding};
  ${Breakpoint.sl} {
    max-width: ${gridVariable.contentWidth};
    padding: 0 ${gridVariable.desktopPadding};
  }
`;

export const ContainerFluid = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0;
`;

export const Row = styled.div`
  display: grid;
  ${(props) => {
    let colBreakpoints = '';
    for (const item in props.options) {
      colBreakpoints += `
        ${Breakpoint[item]} {
          grid-template-columns: repeat(${
            props.options[item].col ? props.options[item].col : '1'
          }, 1fr);
          gap: ${
            props.options[item].gap ? `${props.options[item].gap}px` : '32px'
          }
        }
      `;
    }

    return css`
      ${colBreakpoints}
    `;
  }}
`;
