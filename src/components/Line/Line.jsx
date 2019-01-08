import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Line = styled.div`
  background: ${({ color  }) => color };
  position: absolute;

  ${({ vertical }) => vertical && `
    width: 1px;
    height: 100%;
  `}

  ${({ horizontal }) => horizontal && `
    width: 100%;
    height: 1px;
  `}

  ${( props ) => {
    if (props.vertical) {
      if (props.align === 'center') {
        return `left: 50%;`;
      } else if (props.align === 'right') {
        return `right: 0;`;
      } else return `left: 0;`;
    } else {
      if (props.align === 'center') {
        return `top: 50%;`;
      } else if (props.align === 'bottom') {
        return `bottom: 0;`;
      } else {
        return `top: 0;`;
      }
    }
  }}
`;

Line.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  color: PropTypes.string,
  align: PropTypes.string,
};

Line.defaultProps = {
  color: '#eee',
  align: 'left',
};

export default Line;
