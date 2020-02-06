import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import logo from '../images/logo.svg';

const StyledHeader = styled.header`
  text-align: center;
  padding: 2rem 0;
  position: relative;

  /* red rectangle */
  ::before {
    content: url('/svg/Red_largeRectangleGradient.svg');
    display: block;
    position: absolute;
    transform: rotate(90deg);
    z-index: 1;
    top: -3px;
    left: 3.1rem;
    width: calc(1rem + 20vw);
  }

  /* half circle */
  ::after {
    content: url('/svg/Blue_semicircle.svg');
    display: block;
    position: absolute;
    z-index: 1;
    top: 2rem;
    left: 55%;
    width: calc(2rem + 5vw);
    transform: rotate(90deg);
  }
`;

const Logo = styled.img`
  z-index: 10;
  position: relative;
  max-width: 100%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} />
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
