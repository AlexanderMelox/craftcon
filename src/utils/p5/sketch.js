// p5 variables
const images = [];

const sketch = p => {
  function getCanvasDimensions() {
    const canvas = {
      width: (window.innerWidth / 3) * 2,
      height: window.innerHeight - 142,
      defaultBackgroundColor: 50,
    };
    return canvas;
  }

  const canvas = getCanvasDimensions();
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
    // p.image(images[selectedShape], p.mouseX, p.mouseY);
  };

  p.mousePressed = function() {
    p.image(images[selectedShape], p.mouseX, p.mouseY);
  };

  p.mouseDragged = function() {
    if (p.frameCount % 10 === 1) {
      p.image(images[selectedShape], p.mouseX, p.mouseY);
    }
  };

  p.windowResized = function() {
    const canvas = getCanvasDimensions();
    p.resizeCanvas(canvas.width, canvas.height, false);
  };
};

export default sketch;
