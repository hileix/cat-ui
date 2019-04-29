import styled, { keyframes } from 'styled-components'

// 翻页的效果
export const pageTurning = keyframes`
  0% {
    transform: perspective(200px) rotateX(20deg);
    opacity: 0;
  }
  50% {
    transform: perspective(200px) rotateX(10deg);
    opacity: 0.5;
  }
  100% {
    transform: perspective(200px) rotateX(0deg);
    opacity: 1;
  }
`;
