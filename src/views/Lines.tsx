import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

const Line = styled.div`
  position: fixed;
  height: 100%;
  width: 1px;
  top: 0;
  background-color: ${({ theme }: { theme: any }) => theme.contrastLow};

  &:nth-child(1) {
    left: 13.5%;
  }
  &:nth-child(2) {
    left: 28.125%;
  }
  &:nth-child(3) {
    left: 42.75%;
  }
  &:nth-child(4) {
    left: 57.375%;
  }
  &:nth-child(5) {
    left: 72%;
  }
  &:nth-child(6) {
    left: 86.5%;
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
