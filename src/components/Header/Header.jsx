import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  position: relative;
  height: ${({ Height }) => Height};
  background: url(./src/assets/img/header.jpg);
  background-position: 0 -158px;
  /* background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover; */
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: ${({ Height }) => Height};
    left: 0px;
    top: 0px;
    background: linear-gradient(180deg, #151331 0%, rgba(21, 19, 49, 0.8) 49.72%, #151331 100%);
  }
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
