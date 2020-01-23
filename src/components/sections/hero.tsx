import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Header from '../header';
import Container from '../container';
import { NavMenu, NavMenuItem } from '../menu';
import Span from '../span';
import Button from '../button';
import HeroNight from '../assets/night';

const Wrapper = styled.section`
  height: 100vh;
  position: relative;
`;

const HeroContainer = styled(Container)`
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
`;

const PageTitle = styled.h1`
  font-size: 14px;
`;

const Introduction = styled.h2`
  font-size: 64px;
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
          <NavMenu>
            <NavMenuItem active>
              <Link to="/">home</Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link to="/projects">projects</Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link to="/about">about</Link>
            </NavMenuItem>
          </NavMenu>
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
