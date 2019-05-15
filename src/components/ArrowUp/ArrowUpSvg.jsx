import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  cursor: pointer;
  opacity: 0.4;
  transition: all 0.25s;
  & > path {
    transition: all 0.25s;
  }
  & > #arrow-up-border {
    transition: all 0.25s;
  }

  &:hover {
    opacity: 0.7;
    & > path {
      transform: translateY(-3px);
    }
    & > #arrow-up-border {
      r: 30;
    }
  }
`;

const ArrowUpSvg = () => (
  <Svg
    width="66"
    height="66"
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="33" cy="33" r="33" fill="url(#arrow-up-grad)" />
    <circle
      cx="33"
      cy="33"
      r="27"
      stroke="white"
      id="arrow-up-border"
      strokeOpacity="0.25"
      strokeWidth="3"
    />
    <path
      d="M15 39L33 25L51 39"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="arrow-up-grad"
        x1="33"
        y1="0"
        x2="33"
        y2="66"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="rgb(46, 64, 226)" />
        <stop offset="1" stopColor="rgb(139, 50, 255)" />
      </linearGradient>
    </defs>
  </Svg>
);

export default ArrowUpSvg;
