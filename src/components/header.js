import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import logo from '../images/logo.svg';
import NavButton from './nav-button';
import Nav from './nav';
import mq from '../utils/styles/breakpoints';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  position: relative;

  ${mq[0]} {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3000;
  }
`;

const Logo = styled.img`
  z-index: 10;
  position: relative;
  max-width: 100%;
  width: 10rem;

  ${mq[0]} {
    display: none;
  }
`;

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => setNavOpen(true);
  const closeNav = () => setNavOpen(false);

  return (
    <StyledHeader>
      <NavButton openNav={openNav} navOpen={navOpen} closeNav={closeNav} />
      <Logo src={logo} alt="Craftcon" />
      <Nav closeNav={closeNav} navOpen={navOpen} />
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
