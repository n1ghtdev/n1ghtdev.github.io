import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  position: relative;
  height: ${({ Height }) => Height};
  background-image: url(./src/assets/img/header-bg-v7.png);
  /* background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover; */
`;

Header.propTypes = {
  children: PropTypes.any,
  Height: PropTypes.string,
  onScroll: PropTypes.func,
};

Header.defaultProps = {
  Height: '100vh',
};

export default Header;
