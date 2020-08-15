import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  text-align: center;
  padding: 25px 0;
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.3;

  p:first-child {
    margin-bottom: 10px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>licensed under mit</p>
      <p>n1ghtdev (c) {new Date().getFullYear()}</p>
    </Wrapper>
  );
};

export default Footer;
