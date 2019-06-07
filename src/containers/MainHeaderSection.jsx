import React from 'react';
import SocialsList from './SocialsList';
import Anim from '../components/Anim';
import MainHeader from '../components/MainHeader';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Col from '../components/Col';
import Logotype from '../components/Logotype';
import Span from '../components/Span';
import ScrolldownIcon from '../components/ScrolldownIcon';
import WaypointWrapper from './WaypointWrapper';

const MainHeaderSection = () => (
  <MainHeader Height="100vh">
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
              <MainHeader.Title
                Color="#fff"
                FontSize="4.5rem"
                FontWeight="normal"
                FontFamily="Ubuntu"
              >
                front-end developer
              </MainHeader.Title>
            </Anim>
            <Anim anim="bounceInRight" duration={0.75}>
              <MainHeader.SubTitle
                Color="#fff"
                FontWeight="normal"
                FontFamily="Merriweather"
              >
                who’s passionate about
                <Span FontStyle="italic"> highly optimized </Span>and
                <Span FontStyle="italic"> quality driven solutions </Span>
              </MainHeader.SubTitle>
            </Anim>
            <Anim
              anim="bounceInUp"
              duration={0.75}
              delay={0.5}
              style={{ opacity: 0 }}
            >
              <SocialsList />
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
  </MainHeader>
);

export default MainHeaderSection;
