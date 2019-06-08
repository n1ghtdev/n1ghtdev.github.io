import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  Color: PropTypes.string,
  XOffset: PropTypes.number,
};

const defaultProps = {
  Color: '#000',
  XOffset: 10,
};

const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ Color }) => Color};
  margin: ${({ XOffset }) => `${XOffset}px 0`};
`;

HR.propTypes = propTypes;

HR.defaultProps = defaultProps;

export default HR;
