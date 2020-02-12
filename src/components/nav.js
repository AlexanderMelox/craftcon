import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.2s;

  z-index: 9500;
  background: var(--yellow);

  ${({ navOpen }) =>
    navOpen
      ? `opacity: 1;
      visibility: visible;
      overflow: hidden;`
      : `opacity: 0;
  visibility: hidden;`}
`;

const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: calc(100vh - 6rem);
  list-style-type: none;
  margin-top: 6rem;
  padding-left: 1rem;
  overflow-y: scroll;
`;

const ListItem = styled.li`
  :not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;
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

const Nav = ({ navOpen, closeNav }) => {
  return (
    <StyledNav navOpen={navOpen}>
      <NavList>
        {navLinks.map(({ name, path }) => (
          <ListItem key={name}>
            <StyledLink onClick={closeNav} to={path}>
              {name}
            </StyledLink>
          </ListItem>
        ))}
      </NavList>
    </StyledNav>
  );
};

export default Nav;
