import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowUpSvg from './ArrowUpSvg';

const Wrapper = styled.div`
  animation: ${({ Visible }) => Visible ? 'slideDown' : 'slideUp'} .5s linear forwards;
  
  position: fixed;
  transform: translateZ(0);
  right: 50px;
  bottom: 150px;
  z-index: 9999;

  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-50%) translateZ(0);
    }
    100% {
      opacity: 1;
      transform: translateY(0) translateZ(0);
    }
  }
  @keyframes slideUp {
    0% {
      opacity: 1;
      transform: translateY(0) translateZ(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-50%) translateZ(0);
    }
  }
`;

const ArrowUp = ({ Visible }) => (
  <Wrapper Visible={Visible}>
    <ArrowUpSvg />
  </Wrapper>
);

ArrowUp.propTypes = {
  Visible: PropTypes.bool,
};

export default ArrowUp;
