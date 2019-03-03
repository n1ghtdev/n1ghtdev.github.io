import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: ${({ Height }) => typeof Height === 'string' ? Height : `${Height}px`};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex: ${({ FlexProps }) => FlexProps};
  position: relative;
`;

Row.propTypes = {
  children: PropTypes.any,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  Height: PropTypes.any,
  FlexProps: PropTypes.string,
};

Row.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  Height: 'auto',
  FlexProps: '0 1 auto',
};

export default Row;

