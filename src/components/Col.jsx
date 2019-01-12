import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO: refactor inheriting from upper screen size, get rid of nested ternary operators.
const Col = styled.div`
  order: ${({ Order }) => Order};
  padding: ${({ Padding }) => typeof Padding === 'string' ? Padding :
                              (typeof Padding === 'array' ? Padding.map(pad => `${pad}px`) :
                              `${Padding}px`)};
  text-align: ${({ textAlign }) => textAlign};

  @media (min-width: 1200px) {
    flex: 0 0  ${({ lg }) => calcWidth(lg)}%;
    max-width: ${({ lg }) => calcWidth(lg)}%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    flex: 0 0  ${({ md, lg }) => calcWidth(!md ? lg : md)}%;
    max-width: ${({ md, lg }) => calcWidth(!md ? lg : md)}%;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    flex: 0 0  ${({ sm, md, lg }) => calcWidth(!sm ? (lg ? lg : md) : sm)}%;
    max-width: ${({ sm, md, lg }) => calcWidth(!sm ? (lg ? lg : md) : sm)}%;
  }
  @media (max-width: 768px) {
    flex: 0 0  ${({ xs, sm, md, lg }) => calcWidth(!xs ? (sm ? sm : (md ? md : lg)) : xs)}%;
    max-width: ${({ xs, sm, md, lg }) => calcWidth(!xs ? (sm ? sm : (md ? md : lg)) : xs)}%;
  }
`;

const calcWidth = (cols) => (100 / 12) * cols;

Col.propTypes = {
  children: PropTypes.any,
  lg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  md: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  sm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  xs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  Padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  textAlign: PropTypes.string,
  Order: PropTypes.number,
};

Col.defaultProps = {
  lg: 12,
  Padding: 0,
  textAlign: 'left',
  Order: 0,
};

export default Col;
