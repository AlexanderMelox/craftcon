import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import logo from '../images/logo.svg';
import NavButton from './nav-button';
import { moveAround1 } from '../utils/styles/keyframes';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  position: relative;
`;

const Logo = styled.img`
  z-index: 10;
  position: relative;
  max-width: 100%;
  width: 10rem;
  margin-left: 1rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <NavButton />
      <Logo src={logo} alt="Craftcon" />
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
