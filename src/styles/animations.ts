import { keyframes } from 'styled-components';

export const fadeInFn = (finalOpacity: number = 1) => keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: ${finalOpacity};
  }
`;

export const fadeIn = fadeInFn();

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 25%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInUpShort = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 10%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
export const fadeInLeftShort = keyframes`
  from {
    opacity: 0;
    transform: translate3d(10%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
export const fadeInRightShort = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-10%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
export const fadeInDownShort = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -10%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-25%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(25%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
