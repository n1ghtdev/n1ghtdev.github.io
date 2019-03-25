import React from 'react';
import styled from 'styled-components';
import ScrolldownSVG from './ScrolldownSVG';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-bottom: 20px;
`;

const ScrollComponent = () => (
  <Wrapper>
    <ScrolldownSVG />
  </Wrapper>
);

export default ScrollComponent;

