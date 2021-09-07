import { keyframes } from 'styled-components'

export const animations = {
  zoom: keyframes`
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  `,

  glass: keyframes`
   to {
      background-color: #000000b3;
      backdrop-filter: blur(0.7rem);
      -webkit-backdrop-filter: blur(0.7rem);
    }
  `,

  rotate: keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `,

  fadeIn: keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `,

  move: (string1: string, string2: string, string3: string) => keyframes`
    from {
      transform: translate3d(${string1}, ${string2}, ${string3});
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  `
}
