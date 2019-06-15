import React from 'react';
import styled from 'styled-components';

import RoundLogotype from 'svg-react-loader!../assets/svg/round-logotype.svg';

import Header from '../components/Header';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Nav from '../components/Nav';
import RouterNavItem from '../components/RouterNavItem';

import Socials from '../containers/Socials';
import { device } from '../breakpoints';

const SocialsWrapper = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`;

const HeaderSection = () => (
  <Header>
    <Grid>
      <Row Height="inherit" alignItems="center" justifyContent="space-between">
        <Nav Color="#fff">
          <RouterNavItem to="/">
            <RoundLogotype />
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
