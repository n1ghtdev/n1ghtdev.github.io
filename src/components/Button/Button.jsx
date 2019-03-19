import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.a.attrs(({ href }) => ({
  href,
}))`
  display: block;
  /* ${({ Theme }) => {
    switch (Theme) {
      case 'blue-squared':
        return `${BlueSquared};`;
      default:
        return 0;
    }
  }} */
`;

Button.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  target: PropTypes.string,
  Theme: PropTypes.oneOf([
    'blue-squared',
  ]),
};

export default Button;
