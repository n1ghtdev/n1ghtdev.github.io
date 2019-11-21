import React from 'react';
import Container from '../../../views/Container';
import Header from '../../../views/Header';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 2222px;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Header></Header>
      </Container>
    </Wrapper>
  );
};

export default Hero;
