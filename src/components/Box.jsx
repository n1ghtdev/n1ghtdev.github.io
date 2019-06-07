import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  Width: PropTypes.string,
  Height: PropTypes.string,
  Color: PropTypes.string,
  BorderRadius: PropTypes.string,
  Padding: PropTypes.string,
  // flexFlow: PropTypes.string,
  // justifyContent: PropTypes.string,
};

const defaultProps = {
  Width: '100%',
  Height: '100%',
};

const Box = styled.div`
  display: flex;
  width: ${({ Width }) => Width};
  height: ${({ Height }) => Height};
  background-color: ${({ Color }) => Color};
  border-radius: ${({ BorderRadius }) => BorderRadius};
  padding: ${({ Padding }) => Padding};
  /* flex-flow: ${({ flexFlow }) => flexFlow};
  justify-content: ${({ justifyContent }) => justifyContent}; */
`;

Box.propTypes = propTypes;

Box.defaultProps = defaultProps;

Box.propTypes = {
  children: PropTypes.any,
};

export default Box;
