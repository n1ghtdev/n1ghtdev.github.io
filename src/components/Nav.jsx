import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = styled.nav`
  color: ${({ Color }) => Color};
  font-family: ${({ FontFamily }) => FontFamily};
`;

Nav.propTypes = {
  children: PropTypes.any,
  Color: PropTypes.string,
  FontFamily: PropTypes.string,
};

export default Nav;
