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

const ScrolldownSVG = () => {
  return (
	<svg width="30" height="67" fill="none">
		<Path d="M9 60L15.5 65L22 60" stroke="white" />
		<rect x="1" y="1" width="28" height="47" rx="14" stroke="white" strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round"/>
		<circle cx="15" cy="16" r="3" stroke="white" strokeWidth="2" />
		<Path d="M9 52L15.5 57L22 52" stroke="white" strokeOpacity="0.75" />
	</svg>
	);
};

export default ScrolldownSVG;

