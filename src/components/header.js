import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  text-align: center;
  padding: 1rem 0;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 3px;

  @supports (-webkit-text-stroke: 1px black) {
    span {
      -webkit-text-stroke: 1px var(--white);
      -webkit-text-fill-color: var(--black);
    }
  }
`;

const Lead = styled.p`
  font-style: italic;
  font-weight: 400;
  margin-top: 0;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title>
        Craft<span>Con</span>
      </Title>
      <Lead>Weird plex, but okay.</Lead>
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
