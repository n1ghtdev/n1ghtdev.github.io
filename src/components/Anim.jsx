import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import animations from './animations';
// import { device } from './breakpoints';

const animationList = Object.keys(animations);

const propTypes = {
  anim: PropTypes.oneOf(animationList),
  duration: PropTypes.number,
  delay: PropTypes.number,
};

const defaultProps = {
  anim: animationList[0],
  duration: 0.5,
  delay: 0,
};

const Anim = styled.div`
  animation: ${({ anim, duration, delay }) =>
    css`${animations[anim]} ${duration}s linear ${delay}s forwards`};
`;

Anim.propTypes = propTypes;

Anim.defaultProps = defaultProps;

export default Anim;
