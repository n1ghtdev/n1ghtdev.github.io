import React from 'react';
import styled from 'styled-components';
import { device } from '../../../breakpoints';

const Svg = styled.svg`
  @media ${device.mobile} {
    display: none;
  }
`;

const Logotype = () => (
  <Svg
    width="221"
    height="411"
    viewBox="0 0 221 411"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M86.7623 228.336L23.5805 319.753L23.5909 142.615L169.299 340.336L158.976 228.336L138.607 7.33642"
      stroke="#11EC83"
      strokeOpacity="0.5"
      strokeWidth="25"
    />
    <path
      d="M106.762 255.336L43.5805 346.753L43.5909 169.615L189.299 367.336L178.976 255.336L158.607 34.3364"
      stroke="#003766"
      strokeOpacity="0.5"
      strokeWidth="25"
    />
    <path
      d="M97.7623 243.336L34.5805 334.753L34.5909 157.615L180.299 355.336L169.976 243.336L149.607 22.3364"
      stroke="white"
      strokeOpacity="0.85"
      strokeWidth="30"
    />
  </Svg>
);

export default Logotype;
