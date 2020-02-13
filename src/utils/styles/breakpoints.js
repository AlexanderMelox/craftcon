// Breakpoints for emotion media queries
export const breakpoints = [1000];

const mq = breakpoints.map(bp => `@media (min-width: ${bp / 16}em )`);

export const mediaQueryMap = {
  desktopSm: mq[0],
};

export default mq;
