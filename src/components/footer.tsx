import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  text-align: center;
  padding: 25px 0;
`;

const Footer = () => {
  return <Wrapper>n1ghtdev (c) 2019-{new Date().getFullYear()}</Wrapper>;
};

export default Footer;
