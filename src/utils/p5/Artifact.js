import p5 from 'p5';

class Artifact {
  constructor(options) {
    this.initialX = options.x;
    this.initialY = options.y;
    this.x = options.x;
    this.y = options.y;
    this.w = options.width;
    this.height = options.height;
    this.pf = options.pf || 0.1;
    this.image = options.image;
  }

  display() {
    p5.image(this.image, this.x, this.y, this.width, this.height);
  }
}

export default Artifact;
