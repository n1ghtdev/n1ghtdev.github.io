import { css } from 'styled-components';

type breakpointsType = {
  [key: string]: any;
};

type CSSParams = Parameters<typeof css>;

export const breakpoints: breakpointsType = {
  tiny: 370,
  small: 576,
  medium: 768,
  large: 992,
  xl: 1200,
  xxl: 1400,
};

const media = Object.keys(breakpoints).reduce(
  (accumulator: breakpointsType, label: string): breakpointsType => {
    const pxBreakpoint = `${breakpoints[label]}px`;

    accumulator[label] = (...args: CSSParams) => css`
      @media (min-width: ${pxBreakpoint}) {
        ${css(...(args as CSSParams))};
      }
    `;

    return accumulator;
  },
  {}
);

export default media;
