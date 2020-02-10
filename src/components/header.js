import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from '@emotion/styled';
import logo from '../images/logo.svg';
import NavButton from './nav-button';
import Nav from './nav';
import { useState, useDispatch } from '../hooks';

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
`;

const Header = () => {
  const { header } = useState();
  const dispatch = useDispatch();

  const openNav = () =>
    dispatch({ type: `${header.navOpen ? 'CLOSE' : 'OPEN'}_NAV` });

  return (
    <StyledHeader>
      <NavButton onClick={openNav} navOpen={header.navOpen} />
      <Logo src={logo} alt="Craftcon" />
      <Nav navOpen={header.navOpen} />
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
