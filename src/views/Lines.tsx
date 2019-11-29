import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  max-width: 1400px;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: -1;
`;

const Line = styled.div`
  position: absolute;
  height: 100%;
  width: 1px;
  top: 0;
  background-color: ${({ theme }: { theme: any }) => theme.contrastLow};
  &:nth-child(1) {
    left: 0%;
  }
  &:nth-child(2) {
    left: 20%;
  }
  &:nth-child(3) {
    left: 40%;
  }
  &:nth-child(4) {
    left: 60%;
  }
  &:nth-child(5) {
    left: 80%;
  }
  &:nth-child(6) {
    left: 100%;
  }
`;

const Lines = () => {
  return (
    <Overlay>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </Overlay>
  );
};

export default Lines;
