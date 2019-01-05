import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Path = styled.path`
  stroke-width: 2;
  &:last-child {
    animation: blink .75s ease .50s infinite;
  }
  &:first-child {
    animation: blink .75s ease .25s infinite;
  }
  @keyframes blink {
    from {
      stroke-opacity: 1;
    }
    to {
      stroke-opacity: 0;
    }
  }
`;

const ScrolldownSVG = ({ children }) => {
  return (
    <svg width="30" height="67">
      <Path d="M9 60L15.5 65L22 60" stroke="white" stroke-width="2"/>
      <rect x="1" y="1" width="28" height="47" rx="14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="15" cy="16" r="3" stroke="white" stroke-width="2"/>
      <Path d="M9 52L15.5 57L22 52" stroke="white" strokeOpacity="0.75" stroke-width="2"/>
    </svg>
	);
};

ScrolldownSVG.propTypes = {
  children: PropTypes.any,
};

export default ScrolldownSVG;
