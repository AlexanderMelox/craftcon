import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import p5 from 'p5';

/**
 * Sketch Component that renders a p5 canvas
 *
 * @param {function} sketch - sketch is the function that p5 is going to run,
 *                            this is where setup() and draw() will live
 *
 * @param {object} rest - An object of all other props on the component.
 *                        If you want to hook react state changes with p5 here is where you would pass it.
 *
 * @return {element} A react element with a p5 canvas
 * @example
 *
 *     <Sketch sketch={function() {}} backgroundColor="blue" />
 */
const Sketch = ({ sketch, ...rest }) => {
  // p5 <canvas> will be injected inside this div
  const canvasContainer = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    // init new p5 canvas
    setCanvas({ ...new p5(sketch, canvasContainer.current), props: {} });

    return () => {
      // remove canvas when component unmounts
      if (canvas) canvas.remove();
    };
  }, [sketch]);

  useEffect(() => {
    // Pass down any changing props to p5 props
    if (canvas && 'myCustomRedrawAccordingToNewPropsHandler' in canvas) {
      // passes down props as an obj to p5.props
      canvas.myCustomRedrawAccordingToNewPropsHandler({ ...rest });
    }
  }, [rest]);

  return <div ref={canvasContainer}></div>;
};

Sketch.propTypes = {
  sketch: PropTypes.func.isRequired,
  rest: PropTypes.object,
};

export default Sketch;
