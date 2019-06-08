import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-bottom: 20px;
  color: #fff;
`;

const Scroll = styled.div`
  width: 1px;
  height: 30px;
  background: #fff;
`;

const ScrolldownIcon = () => (
  <Wrapper>
    <Scroll />
    <span>scroll</span>
  </Wrapper>
);

export default ScrolldownIcon;
