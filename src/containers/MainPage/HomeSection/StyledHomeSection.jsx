import PropTypes from 'prop-types';
import styled from 'styled-components';
import headerImage from '../../../assets/img/header-bg.jpg';
import { device } from '../../../breakpoints';

const StyledHomeSection = styled.section`
  position: relative;
  height: 100vh;
  height: -webkit-fill-available;
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
    background: linear-gradient(
      180deg,
      rgba(17, 236, 131, 0.5) 0%,
      rgba(0, 94, 175, 0.5) 100%
    );
  }
  @media ${device.mobile} {
  }
`;

StyledHomeSection.propTypes = {
  children: PropTypes.any,
};

export default StyledHomeSection;
