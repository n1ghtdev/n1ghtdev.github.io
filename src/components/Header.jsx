import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  position: relative;
  height: ${({ Height }) => Height};
`;

Header.propTypes = {
  children: PropTypes.any,
  Height: PropTypes.string,
};

Header.defaultProps = {
  Height: 'auto',
};

export default Header;
