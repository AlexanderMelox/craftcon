import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import mq from '../utils/styles/breakpoints';
import rem from '../utils/styles/rem';

const StyledNav = styled.nav`
  display: flex;
  display: none;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 0.2s;
  opacity: 0;
  visibility: hidden;
  z-index: 9500;
  background: var(--yellow);

  ${({ navOpen }) =>
    navOpen &&
    `opacity: 1;
      visibility: visible;
      overflow: hidden;`}

  ${mq[0]} {
    transition: none;

    background: transparent;
    justify-content: center;
    align-items: center;
    opacity: 1;
    position: relative;
    top: 0;
    left: 0;
    visibility: visible;
    width: 100vw;
    height: ${rem(40)};
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: calc(100vh - 6rem);
  list-style-type: none;
  margin-top: 6rem;
  padding-left: 1rem;

  ${mq[0]} {
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100%;

    margin-top: 0rem;
    overflow-y: initial;
    padding-left: 0;
  }
`;

const ListItem = styled.li`
  :not(:last-of-type) {
    margin-bottom: 2rem;
  }

  ${mq[0]} {
    &:not(:last-of-type) {
      margin-bottom: 0;
    }
  }
`;
const StyledLink = styled(Link)`
  color: var(--black);
  text-decoration: none;
  font-size: 2rem;
  text-transform: uppercase;
  line-height: 1.1;

  ${mq[0]} {
    font-size: ${rem(14)};
    padding: ${rem(8)} ${rem(50)};

    &.active {
      border-bottom: ${rem(5)} solid var(--yellow);
    }
  }
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
            <StyledLink activeClassName="active" onClick={closeNav} to={path}>
              {name}
            </StyledLink>
          </ListItem>
        ))}
      </NavList>
    </StyledNav>
  );
};

export default Nav;
