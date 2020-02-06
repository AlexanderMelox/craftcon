import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import Header from './header';
import SEO from './seo';

const globalStyles = css`
  :root {
    /* colors */
    --black: #282828;
    --white: #ffffff;
    --red: #ff4924;
    --yellow: #fef202;
    --blue: #0098c1;

    --font-family: 'Questrial', sans-serif;
  }

  /* TODO: Make sure tiff approves of this font for a alternative */
  @import url('https://fonts.googleapis.com/css?family=Questrial&display=swap');

  @font-face {
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/MonumentExtended-Regular.otf');
  }
  @font-face {
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: bold;
    src: url('../fonts/MonumentExtended-Ultrabold.otf') f;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-image: url('/paper.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    z-index: -9999;
  }

  body,
  html {
    margin: 0;
    font-family: var(--font-family);
    line-height: 1.4;
    background-color: var(--white);
    color: var(--black);
    font-weight: 400;

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
      color: var(--black);
      line-height: 1.1;
      font-weight: 400;

      + * {
        margin-top: 0.5rem;
      }
    }

    strong {
      color: var(--black);
    }

    li {
      margin-top: 0.25rem;
    }
  }
`;

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  padding: 0 1rem;
  height: 100vh;
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
