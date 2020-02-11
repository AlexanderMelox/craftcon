import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from '@emotion/styled';
import logo from '../images/logo.svg';
import NavButton from './nav-button';
import Nav from './nav';
import { useState, useDispatch } from '../hooks';
import { store } from '../store';

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
  let { state } = useContext(store);
  const dispatch = useDispatch();

  // TODO: remove state from global and state and make this its seperate context tree
  if (!state) {
    state = { header: { navOpen: false } };
  }

  const openNav = () =>
    dispatch({ type: `${state.header.navOpen ? 'CLOSE' : 'OPEN'}_NAV` });

  return (
    <StyledHeader>
      <NavButton onClick={openNav} navOpen={state.header.navOpen} />
      <Logo src={logo} alt="Craftcon" />
      <Nav navOpen={state.header.navOpen} />
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
