import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import animations from './Animations';

const animationList = Object.keys(animations);

const propTypes = {
  anim: PropTypes.oneOf(animationList).isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

const defaultProps = {
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
