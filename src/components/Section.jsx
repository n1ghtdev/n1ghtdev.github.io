import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.any,
  Height: PropTypes.string,
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  Padding: PropTypes.string,
};

const Section = styled.section`
  position: relative;
  height: ${({ Height }) => Height};
  background-color: ${({ bgColor }) => bgColor};
  background-repeat: no-repeat;
  padding: ${({ Padding }) => Padding};
  margin: ${({ Margin }) => Margin};
`;

Section.propTypes = propTypes;

export default Section;
