import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.any,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  Height: PropTypes.string,
  FlexProps: PropTypes.string,
  Padding: PropTypes.string,
};

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: ${({ Height }) => Height};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex: ${({ FlexProps }) => FlexProps};
  position: relative;
  padding: ${({ Padding }) => Padding};
`;

Row.propTypes = propTypes;

export default Row;
