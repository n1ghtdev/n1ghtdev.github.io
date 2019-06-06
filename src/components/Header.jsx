import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H1, H2 } from './Headings';
import { device } from './breakpoints';
import headerImage from '../assets/img/header-bg.jpg';

const Header = styled.header`
  position: relative;
  height: ${({ Height }) => Height};
  background-color: #1d3247;
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: inherit;
    opacity: 0.75;
    filter: contrast(115%);
    background: linear-gradient(180deg, rgba(17, 236, 131, 0.5) 0%, rgba(0, 94, 175, 0.5) 100%);
  }
`;

const Title = styled(H1).attrs(props => ({
  ...props,
}))`
  @media ${device.tablet} {
    font-size: 3rem;
  }
  @media ${device.tabletSmall} {
    font-size: 2rem;
  }
`;

const SubTitle = styled(H2).attrs(props => ({
  ...props,
}))`
  margin: 15px 0 25px 0;
  max-width: 500px;
  @media ${device.tablet} {
  }
  @media ${device.tabletSmall} {
  }
`;

const Socials = styled.div`
  opacity: 0;
`;

Header.propTypes = {
  children: PropTypes.any,
  Height: PropTypes.string,
};

Header.defaultProps = {
  Height: '100vh',
};

Header.Title = Title;
Header.SubTitle = SubTitle;
Header.Socials = Socials;

export default Header;
