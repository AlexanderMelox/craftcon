import React, { useState } from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import { store } from '../store';
import P5Wrapper from 'react-p5-wrapper';
import { useCloudinarySVGImages } from '../hooks';

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

// p5 variables
const images = [];

const sketch = p => {
  const canvas = {
    width: (window.innerWidth / 3) * 2,
    height: window.innerHeight - 142,
    defaultBackgroundColor: 50,
  };

  let selectedShape;

  // preloads all the svg images to use
  p.preload = function() {
    for (let i = 1; i <= 7; i++) {
      let img = p.loadImage(
        `https://res.cloudinary.com/alexander-melo-assets/image/upload/v1580320841/Craftcon-assets/images/${i}.svg`
      );
      images.push(img);
    }
    console.log('Images successfully loaded', images);
  };

  p.setup = function() {
    p.createCanvas(canvas.width, canvas.height);
    p.background(canvas.defaultBackgroundColor);
    p.imageMode(p.CENTER);
    selectedShape = 0;
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function(newProps) {
    if (newProps.selectedShape) {
      selectedShape = newProps.selectedShape;
    }
  };

  p.draw = function() {
    // p.background(canvas.defaultBackgroundColor);
    console.log(selectedShape);
  };

  p.mousePressed = function() {
    p.image(images[selectedShape], p.mouseX, p.mouseY);
  };

  p.windowResized = function() {
    console.log('resizing');
    p.resizeCanvas(canvas.width, canvas.height, false);
    p.background(canvas.defaultBackgroundColor);
  };
};

const Index = () => {
  const [selectedShape, setSelectedShape] = useState(0);
  const svgImages = useCloudinarySVGImages();

  return (
    <Layout>
      <Poster>
        <P5Wrapper sketch={sketch} selectedShape={selectedShape} />
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
