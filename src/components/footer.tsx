import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  text-align: center;
  padding: 25px 0;
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.7;
`;

const Footer = () => {
  return <Wrapper>n1ghtdev (c) {new Date().getFullYear()}</Wrapper>;
};

export default Footer;