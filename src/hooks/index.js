import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { store } from '../store';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

// returns the dispatch function provided by the store context
export const useDispatch = () => React.useContext(store).dispatch;
// returns the store state
export const useState = () => React.useContext(store).state;
