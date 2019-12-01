import React from 'react';
import styled from 'styled-components';

import { ReactComponent as BackgroundTextSVG } from '../../assets/svg/header-night.svg';
import { ReactComponent as Logotype } from '../../assets/svg/logotype.svg';

import Header from '../Header';
import { NavMenu, NavMenuItem } from '../NavMenu';
import A from '../A';
import Container from '../Container';
import Heading from '../Heading';
import Span from '../Span';
import { ButtonTransparent } from '../Button';

const BackgroundSvg = styled(BackgroundTextSVG)`
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

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogotype = styled(Logotype)`
  width: 40%;
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

const Hero = () => {
  return (
    <Wrapper>
      <BackgroundSvg />
      <StyledContainer>
        <Header>
          <Heading as="h1" fontSize="14px">
            nightdev. <Span color="primary">portfolio</Span>
          </Heading>
          <NavMenu>
            <NavMenuItem active>
              <A to="/">home</A>
            </NavMenuItem>
            <NavMenuItem>
              <A to="/projects">projects</A>
            </NavMenuItem>
            <NavMenuItem>
              <A to="/about">about</A>
            </NavMenuItem>
          </NavMenu>
        </Header>
        <Content>
          <div>
            <Heading as="h2" fontSize="64px">
              <Span block>Hi,</Span>
              <Span block>
                I'm Nikita,
                <Span color="primary"> front end developer </Span>
                based in Kyiv, Ukraine.
              </Span>
            </Heading>
            <Buttons>
              <ButtonTransparent href="#c">contact</ButtonTransparent>
              <ButtonTransparent href="#r">resume</ButtonTransparent>
            </Buttons>
          </div>
          <StyledLogotype />
        </Content>
      </StyledContainer>
    </Wrapper>
  );
};

export default Hero;
