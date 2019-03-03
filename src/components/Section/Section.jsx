import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  min-height: ${({ Height }) => Height};
  background-color: ${({ bgColor }) => bgColor};
  background-image: ${({ bgImage }) => bgImage};
  padding: ${({ Padding }) => Padding};
`;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  Height: PropTypes.string,
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  Padding: PropTypes.string,
};

export default Section;
