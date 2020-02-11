import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { Link } from 'gatsby';
import { useDispatch } from '../hooks';

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.2s;

  z-index: 9500;
  background: var(--yellow);

  ${props =>
    props.navOpen
      ? `opacity: 1;
      visibility: visible;`
      : `opacity: 0;
  visibility: hidden;`}
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 50vh;
  list-style-type: none;
  padding-left: 1rem;
`;

const ListItem = styled.li``;
const StyledLink = styled(Link)`
  color: var(--black);
  font-weight: bold;
  text-decoration: none;
  font-size: 3rem;
  line-height: 1.1;
`;

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Schedule',
    path: '/schedule',
  },
  {
    name: 'Propose a Workshop',
    path: '/workshop',
  },
  {
    name: 'Gallery',
    path: '/gallery',
  },
];

const Nav = ({ navOpen }) => {
  const dispatch = useDispatch();
  const closeNav = () => dispatch({ type: 'CLOSE_NAV' });

  return (
    <>
      <Global
        styles={css`
          body {
            overflow: hidden;
          }
        `}
      />
      <StyledNav navOpen={navOpen}>
        <NavList>
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <StyledLink onClick={closeNav} to={path}>
                {name}
              </StyledLink>
            </li>
          ))}
        </NavList>
      </StyledNav>
    </>
  );
};

export default Nav;
