import { css } from 'styled-components';

const FONT_SIZE = 16;

type breakpointsType = {
  [key: string]: any;
};

type CSSParams = Parameters<typeof css>;

const breakpoints: breakpointsType = {
  small: 576,
  medium: 768,
  large: 992,
  xl: 1200,
};

const media = Object.keys(breakpoints).reduce(
  (accumulator: breakpointsType, label: string): breakpointsType => {
    const emBreakpoint = `${breakpoints[label] / FONT_SIZE}em`;

    accumulator[label] = (...args: CSSParams) => css`
      @media (min-width: ${emBreakpoint}) {
        ${css(...(args as CSSParams))};
      }
    `;

    return accumulator;
  },
  {},
);

console.log(media);

export default media;