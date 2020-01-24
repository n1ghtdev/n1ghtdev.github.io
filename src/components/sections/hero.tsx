import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Header from '../header';
import { NavMenu, NavMenuItem } from '../menu';
import Span from '../span';
import Button from '../button';
import HeroNight from '../assets/night';

import {
  fadeIn,
  fadeInUpShort,
  fadeInDownShort,
} from '../../styles/animations';

const Wrapper = styled.section`
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
  display: flex;
  max-width: 360px;
  letter-spacing: 5px;
  font-weight: bold;
  text-transform: uppercase;
  justify-content: space-between;
  animation: ${fadeInDownShort} 250ms forwards linear;
  animation-delay: 250ms;
  opacity: 0;
`;

const PageTitle = styled.h1`
  font-size: 14px;
  animation: ${fadeIn} 250ms forwards linear;
  animation-delay: 250ms;
  opacity: 0;
`;

const Introduction = styled.h2`
  font-size: 64px;
  animation: ${fadeInUpShort} 250ms forwards linear;
  opacity: 0;
`;

const AnimatedNavMenu = styled(NavMenu)`
  animation: ${fadeIn} 250ms forwards linear;
  animation-delay: 250ms;
  opacity: 0;
`;

const Hero = () => {
  return (
    <Wrapper>
      <HeroNight />
      <HeroContainer>
        <Header>
          <PageTitle>
            nightdev. <Span color="primary">portfolio</Span>
          </PageTitle>
          <AnimatedNavMenu>
            <NavMenuItem active>
              <Link to="/">home</Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link to="/projects">projects</Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link to="/about">about</Link>
            </NavMenuItem>
          </AnimatedNavMenu>
        </Header>
        <Content>
          <Introduction>
            <Span block>Hi,</Span>
            <Span block>
              I'm Nikita,
              <Span color="primary"> front end developer </Span>
              based in Kyiv, Ukraine.
            </Span>
          </Introduction>
          <Buttons>
            <Button href="#c">contact</Button>
            <Button href="#r">resume</Button>
          </Buttons>
        </Content>
      </HeroContainer>
    </Wrapper>
  );
};

export default Hero;
