import { graphql, useStaticQuery } from 'gatsby';

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
