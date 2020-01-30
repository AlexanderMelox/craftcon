import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Sketch from '../components/Sketch';
import { useCloudinarySVGImages } from '../hooks';
import sketch from '../utils/p5/sketch';

const Poster = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: calc(100vh - 142px);
`;

const Controls = styled.aside`
  margin-top: 0;
  padding: 0 1rem;
`;

const SVGImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SVGImage = styled.img`
  width: 7rem;
  cursor: pointer;
  opacity: 0.8;
  margin-right: 1rem;

  :hover {
    opacity: 1;
  }
`;

const Index = () => {
  const [selectedShape, setSelectedShape] = useState(0);
  const svgImages = useCloudinarySVGImages();

  return (
    <Layout>
      <Poster>
        <Sketch sketch={sketch} selectedShape={selectedShape} />
        <Controls>
          <h2>Choose your shape</h2>
          <SVGImageContainer>
            {svgImages.map((url, i) => (
              <SVGImage src={url} onClick={() => setSelectedShape(i)} />
            ))}
          </SVGImageContainer>
        </Controls>
      </Poster>
    </Layout>
  );
};

export default Index;
