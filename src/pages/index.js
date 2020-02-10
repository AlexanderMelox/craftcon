import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';

const Content = styled.div`
  margin-top: 2rem;
`;

const H1 = styled.h1`
  background-image: linear-gradient(to right, var(--yellow), transparent);
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 20px 0%;
  margin-bottom: 2rem;
`;

const Lead = styled.p`
  font-size: 1.6rem;
`;

const Canvas = styled.section`
  width: 100%;
  margin-top: -3rem;
  position: relative;
  height: 60vh;
`;

const CanvasImage = styled.img`
  max-width: 100%;
  width: 15rem;
  position: absolute;
  top: ${props => props.top};
`;

const Grid = styled(CanvasImage)`
  width: 100%;
`;
const Hand = styled(CanvasImage)`
  width: 50%;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5000;
  transition: all ease-in-out;
`;

const SVGImages = [
  {
    name: 'Black_cross',
    top: 50,
    left: 70,
  },
  {
    name: 'Blue_checkerboard',
  },
  {
    name: 'Blue_linerectanglegradient',
  },
  {
    name: 'Blue_rectangle',
  },
  {
    name: 'Red_circles',
  },
  {
    name: 'Red_rectangle',
  },
  {
    name: 'Red_rectanglegradient',
  },
  {
    name: 'Yello_semicircle',
  },
  {
    name: 'Yellow_arrow',
  },
  {
    name: 'Yellow_circles',
  },
  {
    name: 'Yellow_linesquare',
  },
];

const Index = () => {
  return (
    <Layout>
      <Content>
        <H1>Are you a maker?</H1>
        <Lead>
          CraftCon is the place for you to teach, showcase your skills, and
          learn from others. All are welcome to join us Craftcon for a day of
          fun and making.
        </Lead>
        {/* TODO: Add button for typeform here */}
      </Content>
      <Canvas>
        <Grid src="/svg/Grid.svg" />
        <Hand src="/hand.png" />
        {/* {SVGImages.map(svg => (
          <CanvasImage
            top={svg.top}
            left={svg.left}
            width={svg.width}
            src={`/svg/${svg.name}.svg`}
            alt=""
          />
        ))} */}
      </Canvas>
    </Layout>
  );
};

export default Index;
