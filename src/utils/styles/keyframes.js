import { keyframes } from '@emotion/core';

export const moveAround1 = keyframes`
  0% {
    transform: translate(0, 0) rotate(0);
        opacity: 1;
  }
  25% {
    transform: translate(1rem, 1.5rem) rotate(20deg);
    opacity: .1;
  }
  50% {
    transform: translate(-.1rem, 0) rotate(-10deg);
    opacity: 1;
  }
  
  75% {
    transform: translate(0, 1rem) rotate(10deg);
    opacity: .9;
  }
  
  100% {
    transform: translate(.7rem, -.4rem) rotate(0);
    opacity: .9;
  }
`;
