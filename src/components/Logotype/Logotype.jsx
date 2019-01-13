import React from 'react';
import styled from 'styled-components';
import LogotypeSvg from './LogotypeSvg';

const Wrapper = styled.div`
  margin-left: 30px;
`;

const Logotype = () => (
  <Wrapper>
    <LogotypeSvg />
  </Wrapper>
);

export default Logotype;

