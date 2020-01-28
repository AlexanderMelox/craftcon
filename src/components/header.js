import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { useSiteMetadata } from '../hooks';

const StyledHeader = styled.header``;

const Header = () => {
  const { title } = useSiteMetadata();

  return (
    <StyledHeader>
      <h1>{title}</h1>
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
