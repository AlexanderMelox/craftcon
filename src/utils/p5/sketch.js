import { breakpoints } from '../styles/breakpoints';
import Artifact from './Artifact';

const sketch = p => {
  let { width: canvasWidth, height: canvasHeight } = getCanvasDimensions();

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

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  // preloads all the svg images to use
  p.preload = function() {};

  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.imageMode(p.CENTER);
  };

  // This function is to sync React state with P5. When the state changes in React, p5 will redraw the canvas.
  p.myCustomRedrawAccordingToNewPropsHandler = function(newProps) {};

  p.draw = function() {
    p.background(252.5);
  };

  p.windowResized = function() {
    const canvas = getCanvasDimensions();
    p.resizeCanvas(canvas.width, canvas.height, false);
  };
};

export default sketch;
