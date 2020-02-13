import { breakpoints } from "../styles/breakpoints";

// p5 variables
const images = [];

const sketch = p => {
  let artifacts;
  let { width: canvasWidth, height: canvasHeight } = getCanvasDimensions();

  function getCanvasDimensions() {
    const canvas = {
      width:
        window.innerWidth > breakpoints[0]
          ? window.innerWidth / 2 // if the window is greater than 1000px => render canvas at 50%
          : window.innerWidth - 48, // on mobile make canvas 100% - 48px of padding
      height: window.innerHeight,
      defaultBackgroundColor: 50
    };
    return canvas;
  }

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function placeImages() {
    artifacts.forEach(artifact => {
      artifact.position = p.createVector(
        random(
          0 + artifact.image.width / 2,
          canvasWidth - artifact.image.width / 2
        ),
        random(
          0 + artifact.image.height / 2,
          canvasHeight - artifact.image.height / 2
        )
      );
    });
  }

  function randomizeImages() {
    artifacts.forEach(artifact => {
      artifact.momentum = p.createVector(
        random(-0.08, 0.08),
        random(-0.08, 0.08)
      );
    });
  }

  function moveImages() {
    artifacts.forEach(artifact => {
      artifact.position.add(artifact.momentum);
      if (
        artifact.position.x >= canvasWidth - artifact.image.width / 2 ||
        artifact.position.x <= 0 + artifact.image.width / 2
      ) {
        artifact.momentum.x = -1 * artifact.momentum.x;
      }
      if (
        artifact.position.y >= canvasHeight - artifact.image.height / 2 ||
        artifact.position.y <= 0 + artifact.image.height / 2
      ) {
        artifact.momentum.y = -1 * artifact.momentum.y;
      }
    });
  }

  function renderImages() {
    artifacts.forEach(artifact => {
      p.image(artifact.image, artifact.position.x, artifact.position.y);
    });
  }

  // preloads all the svg images to use
  p.preload = function() {
    artifacts = [
      { image: p.loadImage("/svg/Blue_semicircle.svg") },
      { image: p.loadImage("/svg/red_circles.svg") },
      { image: p.loadImage("/svg/Blue_linerectanglegradient.svg") }
    ];
  };

  p.setup = function() {
    p.createCanvas(canvasWidth, canvasHeight);
    p.imageMode(p.CENTER);
    placeImages();
    randomizeImages();
  };

  // This function is to sync React state with P5. When the state changes in React, p5 will redraw the canvas.
  p.myCustomRedrawAccordingToNewPropsHandler = function(newProps) {};

  p.draw = function() {
    p.background(300);
    moveImages();
    renderImages();
  };

  p.windowResized = function() {
    const canvas = getCanvasDimensions();
    console.log(canvas);
    p.resizeCanvas(canvas.width, canvas.height, false);
  };
};

export default sketch;
