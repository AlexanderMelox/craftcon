import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import { store } from '../store';
import P5Wrapper from 'react-p5-wrapper';

const Poster = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: calc(100vh - 142px);
`;

const sketch = p => {
  const canvasDimensions = {
    width: (window.innerWidth / 3) * 2,
    height: window.innerHeight - 142,
  };

  p.setup = function() {
    p.createCanvas(canvasDimensions.width, canvasDimensions.height);
    p.background(51);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {};

  p.draw = function() {};
};

const Index = () => {
  return (
    <Layout>
      <Poster>
        <P5Wrapper sketch={sketch} />
        <aside>side nav</aside>
      </Poster>
    </Layout>
  );
};

export default Index;
