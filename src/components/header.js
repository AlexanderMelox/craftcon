import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { useSiteMetadata } from '../hooks';

const StyledHeader = styled.header`
  text-align: center;
  padding: 5rem 0;
`;

const Title = styled.h1`
  font-size: 10vw;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const Lead = styled.p`
  font-style: italic;
  margin-top: 0;
`;

const Header = () => {
  const { title } = useSiteMetadata();

  return (
    <StyledHeader>
      <Title>{title}</Title>
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
