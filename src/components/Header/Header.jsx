import PropTypes from 'prop-types';
import styled from 'styled-components';
import headerImage from '../../assets/img/header.jpg';

const Header = styled.header.attrs(() => ({
  className: 'section',
}))`
  position: relative;
  height: ${({ Height }) => Height};
  background-image: url(${headerImage});
  background-position: 0 -158px;
  background-repeat: no-repeat;
  background-size: cover;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: ${({ Height }) => Height};
    left: 0px;
    top: 0px;
    background: linear-gradient(
      180deg,
      #151331 0%,
      rgba(21, 19, 49, 0.8) 50%,
      #151331 100%
    );
  }
`;

Header.propTypes = {
  children: PropTypes.any,
  Height: PropTypes.string,
};

Header.defaultProps = {
  Height: '100vh',
};

export default Header;
