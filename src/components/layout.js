import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import SEO from './seo';

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
