import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColWidth } from '../utils/getColWidth';

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

  @media (min-width: 1200px) {
    flex: 0 0 ${({ lg }) => getColWidth(lg)}%;
    max-width: ${({ lg }) => getColWidth(lg)}%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    flex: 0 0 ${({ lg, md }) => getColWidth(lg, md)}%;
    max-width: ${({ lg, md }) => getColWidth(lg, md)}%;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    flex: 0 0 ${({ lg, md, sm }) => getColWidth(lg, md, sm)}%;
    max-width: ${({ lg, md, sm }) => getColWidth(lg, md, sm)}%;
  }
  @media (max-width: 768px) {
    flex: 0 0 ${({ lg, md, sm, xs }) => getColWidth(lg, md, sm, xs)}%;
    max-width: ${({ lg, md, sm, xs }) => getColWidth(lg, md, sm, xs)}%;
  }
`;

Col.propTypes = propTypes;

Col.defaultProps = defaultStyles;

export default Col;
