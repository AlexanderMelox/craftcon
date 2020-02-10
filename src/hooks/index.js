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

// TODO: Add the new images to cloudinary
export const useCloudinarySVGImages = () => {
  const images = [];
  for (let i = 1; i <= 7; i++) {
    let imgUrl = `https://res.cloudinary.com/alexander-melo-assets/image/upload/v1580320841/Craftcon-assets/images/${i}.svg`;
    images.push(imgUrl);
  }
  return images;
};

// returns the dispatch function provided by the store context
export const useDispatch = () => React.useContext(store).dispatch;
// returns the store state
export const useState = () => React.useContext(store).state;
