import React from 'react';
import Anim from '../components/Anim';
import Header from '../components/Header';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Col from '../components/Col';
import Logotype from '../components/Logotype';
import Span from '../components/Span';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';
import ScrolldownIcon from '../components/ScrolldownIcon';
import WaypointWrapper from './WaypointWrapper';

const HeaderContainer = () => (
  <Header>
    <WaypointWrapper delay={250} waypointProps={{ topOffset: -200 }}>
      <Grid flex style={{ zIndex: '10' }} relative>
        <Row FlexProps="1" alignItems="center" justifyContent="center">
          <Col lg={4} textAlign="center">
            <Anim anim="bounceInLeft" duration={0.5}>
              <Logotype />
            </Anim>
          </Col>
          <Col lg={8}>
            <Anim anim="bounceInDown" duration={0.75}>
              <Header.Title
                Color="#fff"
                FontSize="4.5rem"
                FontWeight="normal"
                FontFamily="Ubuntu"
              >
                front-end developer
              </Header.Title>
            </Anim>
            <Anim anim="bounceInRight" duration={0.75}>
              <Header.SubTitle
                Color="#fff"
                FontWeight="normal"
                FontFamily="Merriweather"
              >
                who’s passionate about
                <Span FontStyle="italic"> highly optimized </Span>and
                <Span FontStyle="italic"> quality driven solutions </Span>
              </Header.SubTitle>
            </Anim>
            <Anim
              anim="bounceInUp"
              duration={0.75}
              delay={0.5}
              style={{ opacity: 0 }}
            >
              <Nav Color="#fff" FontFamily="'Ubuntu Mono', monospace">
                <NavItem href="#telegram">telegram</NavItem>
                <NavItem href="#facebook">facebook</NavItem>
                <NavItem href="#github">github</NavItem>
              </Nav>
            </Anim>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <ScrolldownIcon />
          </Col>
        </Row>
      </Grid>
    </WaypointWrapper>
  </Header>
);

export default HeaderContainer;
