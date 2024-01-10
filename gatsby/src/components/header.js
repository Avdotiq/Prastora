import * as React from 'react';
import { Link } from 'gatsby';
import LOGO_SVG from '../images/logo.png';
import styled from 'styled-components';

const Header = () => (
  <header>
    <StyledLogo to='/'>
      <img src={LOGO_SVG} alt='prastora' />
      <p>Prastora</p>
    </StyledLogo>
    <StyledMenu></StyledMenu>
  </header>
);

export default Header;

const StyledLogo = styled(Link)`
  display: flex;
  align-item: center;
`;

const StyledMenu = styled.nav`
  display: flex;
  align-item: center;
`;
