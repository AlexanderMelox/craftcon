import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import mq from '../utils/styles/breakpoints';

function generateLineStyles(props) {
  let cssString = ``;

  if (props.navOpen) {
    if (props.pos === 'middle') {
      cssString += 'opacity: 0';
    }
    if (props.pos === 'top') {
      cssString += `
        transform: rotate(41deg) !important;
      `;
    }
    if (props.pos === 'bottom') {
      cssString += `
        transform: rotate(-41deg) !important;
      `;
    }
  }
  return cssString;
}

const Line = styled.span`
  width: 2rem;
  height: 3px;
  background-color: ${props =>
    props.navOpen ? 'transparent' : 'var(--yellow)'};
  position: relative;
  z-index: 9999;

  &::before {
    content: '';
    transform-origin: left;
    display: inline-block;
    position: absolute;
    width: 2rem;
    height: 100%;
    background: var(--black);
    transform: translate(3px, -3px);
    top: 0;
    left: 0;
    z-index: 0;
    transition: all 0.2s;

    ${props => generateLineStyles(props)}
  }
`;

const StyledNavButton = styled.button`
  display: flex;
  display: none;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  top: 2rem;
  left: 1rem;
  outline: none;
  width: 2rem;
  height: 1.5rem;
  border: none;
  color: white;
  background-color: transparent;
  cursor: inherit;
  z-index: 9999;

  &:hover ${Line}::before {
    transform: translate(1px, -1px);
  }

  /* Small desktop */
  ${mq[0]} {
    display: none;
  }
`;

const NavButton = ({ openNav, navOpen, closeNav }) => {
  const toggleButton = () => (navOpen ? closeNav() : openNav());

  return (
    <StyledNavButton onClick={toggleButton}>
      <Line pos="top" navOpen={navOpen} />
      <Line pos="middle" navOpen={navOpen} />
      <Line pos="bottom" navOpen={navOpen} />
    </StyledNavButton>
  );
};

NavButton.propTypes = {
  openNav: PropTypes.func.isRequired,
  closeNav: PropTypes.func.isRequired,
  navOpen: PropTypes.bool.isRequired,
};

export default NavButton;
