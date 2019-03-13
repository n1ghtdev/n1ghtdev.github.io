import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const BlueSquared = css`
  background: transparent;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 15px 45px;
  transition: all .25s;
  position: relative;
  overflow: hidden;
  line-height: 1;
  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background: #fff;
    transition: transform .25s ease-out;
  }
  &:before {
    left: -25%;
    top: 0;
  }
  &:after {
    left: 25%;
    bottom: 0;
  }
  &:hover {
    &:before {
      transform: translateX(50%) rotate(90deg);
    }
    &:after {
      transform: translateX(-50%) rotate(90deg);
    }
  }
`;

const Button = styled.a.attrs(({ href }) => ({
  href: href || '#',
}))`
  margin: ${({ Margin }) => Margin};
  display: block;
  ${({ Theme }) => {
    switch (Theme) {
      case 'blue-squared':
        return `${BlueSquared};`;
      default:
        return 0;
    }
  }}
`;

Button.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  target: PropTypes.string,
  Theme: PropTypes.oneOf([
    'blue-squared',
  ]),
  Margin: PropTypes.string,
};

export default Button;
