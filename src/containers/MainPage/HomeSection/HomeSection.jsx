import React from 'react';
import Logotype from 'svg-react-loader!../../../assets/svg/logotype.svg';

import StyledHomeSection from './StyledHomeSection';
import Title from './Title';
import SubTitle from './SubTitle';

import Anim from '../../../components/Anim';
import Grid from '../../../components/Grid';
import Row from '../../../components/Row';
import Col from '../../../components/Col';
import Span from '../../../components/Span';
import Scrolldown from './Scrolldown';

import Socials from '../../Socials';
import WaypointWrapper from '../../WaypointWrapper';

const HomeSection = () => (
  <StyledHomeSection>
    <Grid flex style={{ zIndex: '10' }} relative>
      <WaypointWrapper delay={250} waypointProps={{ topOffset: -200 }}>
        <Row FlexProps="1" alignItems="center" justifyContent="center">
          <Col lg={4} textAlign="center">
            <Anim anim="bounceInLeft" duration={0.5}>
              <Logotype />
            </Anim>
          </Col>
          <Col lg={8}>
            <Anim anim="bounceInDown" duration={0.75}>
              <Title>front-end developer</Title>
            </Anim>
            <Anim anim="bounceInRight" duration={0.75}>
              <SubTitle>
                who’s passionate about
                <Span FontStyle="italic"> highly optimized </Span>and
                <Span FontStyle="italic"> quality driven solutions </Span>
              </SubTitle>
            </Anim>
            <Anim
              anim="bounceInUp"
              duration={0.75}
              delay={0.5}
              style={{ opacity: 0 }}
            >
              <Socials />
            </Anim>
          </Col>
        </Row>
      </WaypointWrapper>
      <Row>
        <Col lg={12}>
          <Scrolldown />
        </Col>
      </Row>
    </Grid>
  </StyledHomeSection>
);

export default HomeSection;
