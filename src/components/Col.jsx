import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Col = styled.div`
  @media (min-width: 1200px) {
    flex: 0 0  ${(props) => Math.floor(100 / 12 *  props.lg) || 100}%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    flex: 0 0  ${(props) => Math.floor(100 / 12 *  props.md) || 100}%;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    flex: 0 0  ${(props) => Math.floor(100 / 12 *  props.sm) || 100}%;
  }
  @media (max-width: 768px) {
    flex: 0 0  ${(props) => Math.floor(100 / 12 *  props.xs) || 100}%;
  }
`;

Col.propTypes = {
  children: PropTypes.any,
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
};

export default Col;

