import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import calculateColumnWidth from '../utils/calculateColumnWidth';

const propTypes = {
  children: PropTypes.any,
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  Padding: PropTypes.string,
  Height: PropTypes.string,
  textAlign: PropTypes.oneOf(['center', 'right', 'left', 'inherit', 'initial']),
  Order: PropTypes.number,
  Margin: PropTypes.string,
};

const defaultStyles = {
  lg: 12,
  textAlign: 'left',
};

// TODO: auto columns
const Col = styled.div`
  height: ${({ Height }) => Height};
  order: ${({ Order }) => Order};
  padding: ${({ Padding }) => Padding};
  text-align: ${({ textAlign }) => textAlign};
  margin: ${({ Margin }) => Margin};

  ${({ lg, md = lg, sm = md, xs = sm }) => css`
    @media (min-width: 1200px) {
      flex: 0 0 ${calculateColumnWidth(lg)}%;
      max-width: ${calculateColumnWidth(lg)}%;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      flex: 0 0 ${calculateColumnWidth(md)}%;
      max-width: ${calculateColumnWidth(md)}%;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      flex: 0 0 ${calculateColumnWidth(sm)}%;
      max-width: ${calculateColumnWidth(sm)}%;
    }
    @media (max-width: 767px) {
      flex: 0 0 ${calculateColumnWidth(xs)}%;
      max-width: ${calculateColumnWidth(xs)}%;
    }
  `}
`;

Col.propTypes = propTypes;

Col.defaultProps = defaultStyles;

export default Col;
