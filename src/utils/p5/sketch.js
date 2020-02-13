import { breakpoints } from '../styles/breakpoints';

// p5 variables
const images = [];

const sketch = p => {
  function getCanvasDimensions() {
    const canvas = {
      width:
        window.innerWidth > breakpoints[0]
          ? window.innerWidth / 2 // if the window is greater than 1000px => render canvas at 50%
          : window.innerWidth - 48, // on mobile make canvas 100% - 48px of padding
      height: window.innerHeight,
      defaultBackgroundColor: 50,
    };
    return canvas;
  }

  const canvas = getCanvasDimensions();
  let selectedShape;

  // preloads all the svg images to use
  p.preload = function() {};

  p.setup = function() {
    p.createCanvas(canvas.width, canvas.height);
    p.background(canvas.defaultBackgroundColor);
    p.imageMode(p.CENTER);
    selectedShape = 0;
  };

  // This function is to sync React state with P5. When the state changes in React, p5 will redraw the canvas.
  p.myCustomRedrawAccordingToNewPropsHandler = function(newProps) {
    if (newProps.selectedShape) {
      selectedShape = newProps.selectedShape;
    }
  };

  p.draw = function() {};

  p.mousePressed = function() {};

  p.mouseDragged = function() {};

  p.windowResized = function() {
    const canvas = getCanvasDimensions();
    p.resizeCanvas(canvas.width, canvas.height, false);
  };
};

export default sketch;
