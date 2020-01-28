import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import Header from './header';
import SEO from './seo';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600,700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  * + * {
    margin-top: 1rem;
  }

  body,
  html {
    margin: 0;
    color: #555;
    font-family: 'IBM Plex Sans', sans-serif;
    line-height: 1.4;
    background-color: #000;
    color: #eee;

    /* removes margin top for main gatsby div */
    > div {
      margin-top: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #fefefe;
      line-height: 1.1;

      + * {
        margin-top: 0.5rem;
      }
    }

    strong {
      color: #eee;
    }

    li {
      margin-top: 0.25rem;
    }
  }
`;

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1rem 1fr 1rem;

  > * {
    grid-column: 2 / 3;
  }
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Global styles={globalStyles} />
      <SEO />
      <Header />
      <main>{children}</main>
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
