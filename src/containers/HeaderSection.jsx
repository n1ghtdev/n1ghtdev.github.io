import React from 'react';
import RoundLogotype from 'svg-react-loader!../assets/svg/round-logotype.svg';

import Header from '../components/Header';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Nav from '../components/Nav';
import RouterNavItem from '../components/RouterNavItem';

import Socials from '../containers/Socials';

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
        <Socials />
      </Row>
    </Grid>
  </Header>
);

export default HeaderSection;
