import { breakpoints } from '../styles/breakpoints';
import images from './images';
import { Vector } from 'p5';

const sketch = p => {
  class Shape {
    constructor(options) {
      this.initialX = options.x;
      this.initialY = options.y;
      this.x = options.x;
      this.y = options.y;
      this.w = options.width || options.image.width;
      this.h = options.height || options.image.height;
      this.pf = options.pf || 0.1;
      this.image = options.image;
    }

    display() {
      p.image(this.image, this.x, this.y, this.w, this.h);
    }

    update(v) {
      this.x = v.x + this.initialX;
      this.y = v.y + this.initialY;
    }
  }

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

  // global variables
  let loadedShapes = [],
    shapes = [],
    center,
    mouseVector,
    displacement;

  // preloads all the svg images to use
  p.preload = function() {
    let prefix = '/svg/';
    const imagesToLoad = [...images];
    imagesToLoad.forEach(img => {
      loadedShapes.push(p.loadImage(prefix + img.name));
    });
  };

  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.imageMode(p.CENTER);

    center = p.createVector(canvasWidth / 2, canvasHeight / 2);

    loadedShapes.forEach((shapeImgObj, i) => {
      let shape = new Shape({
        image: shapeImgObj,
        width: images[i].width,
        height: images[i].height,
        x: p.random(0, canvasWidth),
        y: p.random(0, canvasHeight),
        pf: p.random(0.01, 0.1),
      });
      shapes.push(shape);
    });
  };

  // This function is to sync React state with P5. When the state changes in React, p5 will redraw the canvas.
  p.myCustomRedrawAccordingToNewPropsHandler = function(newProps) {};

  p.draw = function() {
    p.background(252.5);
    mouseVector = p.createVector(p.mouseX, p.mouseY);

    shapes.forEach(shape => {
      shape.display();
      displacement = Vector.sub(center, mouseVector).mult(shape.pf);
      shape.update(displacement);
    });
  };

  p.windowResized = function() {
    const canvas = getCanvasDimensions();
    p.resizeCanvas(canvas.width, canvas.height, false);
  };
};

export default sketch;
