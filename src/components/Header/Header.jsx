import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from '../Paragraph';
import headerImage from '../../assets/img/header.jpg';
import { device } from '../breakpoints';

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

const P = styled(Paragraph).attrs(props => ({
  ...props,
}))`
  font-size: 1.5rem;

  @media ${device.tablet} {
    font-size: 1.25rem;
  }
  @media ${device.tabletSmall} {
    font-size: 1.25rem;
  }
`;

Header.propTypes = {
  children: PropTypes.any,
  Height: PropTypes.string,
};

Header.defaultProps = {
  Height: '100vh',
};

Header.Paragraph = P;

export default Header;
