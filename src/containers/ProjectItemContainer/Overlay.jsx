import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../../breakpoints';

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  padding: 0 25px;
  text-align: center;
  opacity: 0;
  background: #fff;
  transition: all 0.25s ease-out;
  @media ${device.mobile} {
    display: none;
  }
`;

Overlay.propTypes = {
  children: PropTypes.any,
};

export default Overlay;
