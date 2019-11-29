import React from 'react';
import styled from 'styled-components';
import Container from '../../../views/Container';
import Header from './Header';
import Content from './Content';

import { ReactComponent as BackgroundTextSVG } from '../../../assets/svg/header-night.svg';

const BGText = styled(BackgroundTextSVG)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Wrapper = styled.section`
  height: 100vh;
  position: relative;
`;

const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Hero = () => {
  return (
    <Wrapper>
      <BGText />
      <StyledContainer>
        <Header />
        <Content />
      </StyledContainer>
    </Wrapper>
  );
};

export default Hero;
