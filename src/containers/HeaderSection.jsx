import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import RoundLogotype from 'svg-react-loader!../assets/svg/round-logotype.svg';

import Header from '../components/Header';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Nav from '../components/Nav';

import Socials from '../containers/Socials';
import { device } from '../breakpoints';

const SocialsWrapper = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`;

const StyledLogotype = styled(RoundLogotype)`
  margin-top: 3px;
  margin-right: 20px;
  transition: all 0.5s;
  &:hover {
    opacity: 0.75s;
    transform: rotate(360deg);
  }
`;

const RouterNavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-family: 'Ubuntu Mono', monospace;
  text-transform: uppercase;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const HeaderSection = () => (
  <Header>
    <Grid>
      <Row Height="inherit" alignItems="center" justifyContent="space-between">
        <Nav Color="#fff">
          <RouterNavItem to="/">
            <StyledLogotype />
          </RouterNavItem>
          <RouterNavItem to="/">mainpage</RouterNavItem>
          <RouterNavItem to="/projects">projects</RouterNavItem>
        </Nav>
        <SocialsWrapper>
          <Socials />
        </SocialsWrapper>
      </Row>
    </Grid>
  </Header>
);

export default HeaderSection;
