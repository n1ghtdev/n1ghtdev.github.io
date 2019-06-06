import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionLine = styled.div`
  position: absolute;
  top: ${({ cross, Height }) =>
    cross
      ? `
  -${Height / 2}px
  `
      : `-${Height}px`};
  left: 50%;
  transform: translateX(-50%);
  width: ${({ Width }) => `${Width}px`};
  height: ${({ Height }) => `${Height}px`};
  background: ${({ Color }) => Color};
`;

SectionLine.propTypes = {
  children: PropTypes.any,
};

export default SectionLine;
