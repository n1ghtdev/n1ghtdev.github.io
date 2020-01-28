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
  text-align: center;

  ${media.medium`
    text-align: left;
  `}
`;

const Buttons = styled.div`
  margin-top: 30px;
  animation: ${fadeInDownShort} 250ms forwards linear;
  animation-delay: 250ms;
  opacity: 0;
`;

const Introduction = styled.h2`
  font-size: 1.5em;
  animation: ${fadeInUpShort} 250ms forwards linear;
  opacity: 0;
  font-family: 'Aller';
  line-height: 1.5;

  ${media.medium`
    padding: 0;
    font-size: 3em;
    line-height: 1.35;
  `}
`;

const Name = styled.span`
  display: block;
  font-size: 16px;
  font-weight: normal;
  opacity: 0.7;
  margin-bottom: 0.5em;

  ${media.medium`
    font-size: 32px;
  `}
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
