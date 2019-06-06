import React from 'react';
import styled from 'styled-components';
import Paragraph from './Paragraph';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-bottom: 20px;
`;

const Scroll = styled.div`
  width: 1px;
  height: 30px;
  background: #fff;
`;

const ScrolldownIcon = () => (
  <Wrapper>
    <Scroll />
    <Paragraph FontFamily="Ubuntu">scroll</Paragraph>
  </Wrapper>
);

export default ScrolldownIcon;
