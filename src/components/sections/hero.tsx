import React from 'react';
import styled from 'styled-components';

import Button from '@components/button';
import Section from '@components/section';
import Logotype from '@components/assets/logotype';

import { fadeInUpShort, fadeInDownShort } from '@styles/animations';
import media from '@styles/media';

const Wrapper = styled.div`
  height: calc(100vh - 50px);
  margin-top: 50px;

  ${media.xxl`
    padding: 0 100px;
  `}
`;

const HeroContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  width: 100%;
  ${media.medium`
    text-align: left;
    width: 60%;
  `}
  ${media.xxl`
    width: 40%;
  `}
`;

const RightColumn = styled.div``;

const Buttons = styled.div`
  margin-top: 50px;
  animation: ${fadeInDownShort} 250ms forwards linear;
  animation-delay: 250ms;
  opacity: 0;

  ${media.medium`
    margin-top: 30px;
  `}
`;

const EmailButton = styled(Button)`
  display: block;
  margin: 0 30px 30px 30px;

  ${media.medium`
    display: inline-block;
    margin: 0 30px 0 0;
  `}
`;

const GithubButton = styled(Button)`
  display: block;
  margin: 0 30px;

  ${media.medium`
    display: inline-block;
    margin: 0;
  `}
`;

const Title = styled.h1`
  animation: ${fadeInUpShort} 250ms forwards linear;
  opacity: 0;

  ${media.medium`
    padding: 0;
    line-height: 1.35;
  `}
`;

const Name = styled.span`
  font-family: 'Inter', sans-serif;
  display: block;
  font-size: 18px;
  font-weight: 600;

  ${media.tiny`
    font-size: 24px;
  `}
`;

const Specialization = styled.span`
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 1000;
  letter-spacing: 1px;
  margin: 10px 0;

  ${media.tiny`
    font-size: 36px; 
  `}
  ${media.medium`
    font-size: 48px; 
  `}
`;

const Description = styled.span`
  animation: ${fadeInUpShort} 250ms forwards linear;
  opacity: 0;

  display: block;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.7;
`;

const Hero = () => {
  return (
    <Section id="hero">
      <Wrapper>
        <HeroContainer>
          <LeftColumn>
            <Title>
              <Name>Nikita | night</Name>
              <Specialization>front-end developer</Specialization>
            </Title>
            <Description>
              An experienced self-taught developer who is concerned about
              quality driven solutions. Passionated to learn new things, so as
              to improve skillset by developing side-projects. Based in Kyiv,
              Ukraine.
            </Description>
            <Buttons>
              <EmailButton href="mailto://artyenick@gmail.com">
                Send me a letter
              </EmailButton>
              <GithubButton href="https://github.com/n1ghtdev">
                Check my GitHub
              </GithubButton>
            </Buttons>
          </LeftColumn>
          <RightColumn>
            <Logotype />
          </RightColumn>
        </HeroContainer>
      </Wrapper>
    </Section>
  );
};

export default Hero;
