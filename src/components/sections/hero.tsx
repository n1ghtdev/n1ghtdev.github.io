import React from 'react';
import styled from 'styled-components';

import Span from '../span';
import Button from '../button';
import HeroNight from '../assets/night';
import Section from '../section';

import { fadeInUpShort, fadeInDownShort } from '../../styles/animations';
import media from '../../styles/media';

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`;

const HeroContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Buttons = styled.div`
  margin-top: 30px;
  animation: ${fadeInDownShort} 250ms forwards linear;
  animation-delay: 250ms;
  opacity: 0;
`;

const Introduction = styled.h2`
  font-size: 2em;
  animation: ${fadeInUpShort} 250ms forwards linear;
  opacity: 0;
  font-family: 'Aller';

  ${media.large`
    font-size: 4em;
  `}
  ${media.medium`
    font-size: 3em;
  `}
`;

const Name = styled.span`
  display: block;
  font-size: 32px;
  font-weight: normal;
  opacity: 0.7;
  margin-bottom: 0.5em;
`;

const Description = styled.span`
  display: block;
`;

const Hero = () => {
  return (
    <Section id="hero">
      <Wrapper>
        <HeroNight />
        <HeroContainer>
          <Content>
            <Introduction>
              <Name>Hi, my name is Nikita</Name>
              <Description>
                I am
                <Span color="primary"> frontend developer</Span> whose passion
                is to create highly optimized and quality driven applications.
              </Description>
            </Introduction>
            <Buttons>
              <Button href="/resume.pdf">download resume</Button>
            </Buttons>
          </Content>
        </HeroContainer>
      </Wrapper>
    </Section>
  );
};

export default Hero;
