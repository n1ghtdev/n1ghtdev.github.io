import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const BlueSquared = css`
  background: hsl(245, 40%, 20%);
  color: #fff;
  text-decoration: none;
  font-size: 0.875rem;
  text-transform: uppercase;
  padding: 7px 35px;
  transition: all .25s;
  &:hover {
    opacity: .9;
    padding: 7px 25px 7px 45px;
  }
`;

const Button = styled.a.attrs(({ href }) => ({
  href: href || '#',
}))`
  margin: ${({ Offset }) => Offset};
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
  Offset: PropTypes.string,
};

export default Button;
