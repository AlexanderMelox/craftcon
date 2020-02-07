import React from 'react';
import styled from '@emotion/styled';

const Line = styled.span`
  width: 2rem;
  height: 3px;
  background-color: var(--yellow);
  position: relative;
  z-index: 9500;

  ::before {
    content: '';
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
  }
`;

const StyledNavButton = styled.button`
  display: flex;
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

  &:hover ${Line}::before {
    transform: translate(1px, -1px);
  }
`;

const NavButton = () => {
  return (
    <StyledNavButton>
      <Line />
      <Line />
      <Line />
    </StyledNavButton>
  );
};

export default NavButton;
