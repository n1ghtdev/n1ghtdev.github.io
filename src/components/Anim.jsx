import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import animations from './Animations';

const animationList = Object.keys(animations);

const propTypes = {
  anim: PropTypes.oneOf(animationList).isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
  iterationCount: PropTypes.string,
};

const defaultProps = {
  duration: 0.5,
  delay: 0,
  iterationCount: '1',
};

const Anim = styled.div`
  animation: ${({ anim, duration, delay, iterationCount }) =>
    css`${
      animations[anim]
    } ${duration}s linear ${delay}s ${iterationCount} forwards`};
`;

Anim.propTypes = propTypes;

Anim.defaultProps = defaultProps;

export default Anim;
