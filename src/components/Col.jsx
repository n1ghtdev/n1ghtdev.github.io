import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// refactor default col
const Col = styled.div`
  padding: ${({ Padding }) => typeof Padding === 'string' ? Padding : `${Padding}px`};
  text-align: ${({ textAlign }) => textAlign};
  @media (min-width: 1200px) {
    flex: 0 0  ${({ lg }) => 100 / 12 * lg}%;
    max-width: ${({ lg }) => 100 /12 * lg}%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    flex: 0 0  ${({ md }) => 100 / 12 * md}%;
    max-width: ${({ md }) => 100 /12 * md}%;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    flex: 0 0  ${({ sm }) => 100 / 12 * sm}%;
    max-width: ${({ sm }) => 100 /12 * sm}%;
  }
  @media (max-width: 768px) {
    flex: 0 0  ${({ xs }) => 100 / 12 * xs}%;
    max-width: ${({ xs }) => 100 /12 * xs}%;
  }
`;

Col.propTypes = {
  children: PropTypes.any,
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
  Padding: PropTypes.any,
  textAlign: PropTypes.string,
};

Col.defaultProps = {
  lg: 12,
  md: 12,
  sm: 12,
  xs: 12,
  Padding: 5,
  textAlign: 'left',
};

export default Col;

