import React from 'react';
import Header from '../../components/Header';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Paragraph from '../../components/Paragraph';
import Span from '../../components/Span';
import HR from '../../components/HR';
import ScrollComponent from '../../components/ScrollComponent';
import A from '../../components/A';
import SocialsContainer from '../SocialsContainer';
// import ParallaxProvider from '../ParallaxProvider';

const HeaderContainer = () => (
  <Header>
    <Grid flex style={{zIndex: '10'}} relative>
      <Row Height={75} alignItems="center" justifyContent="space-between">
        <Col lg={6} textAlign="left">
          <A Color="hsl(250, 25%, 60%)" href="https://github.com/Nickew" target="_blank" relative>github.com/nickew</A>
        </Col>
        <Col lg={6} textAlign="right">
          <A Color="hsl(250, 25%, 60%)" href="mailto://nickew@yahoo.com" relative>nickew@yahoo.com</A>
        </Col>
      </Row>
      <Row FlexProps="1" alignItems="center" justifyContent="center">
        <Col lg={8} textAlign="center">
          <Paragraph fontSize="1.5rem" lineHeight={1.8}>Hi, my name is <Span Color="#3777F3">Nikita</Span>, I am an <Span Color="#CB2A2A">front-end developer</Span> from Ukraine. Passionate about web development by its beauty. I trying to learn new stuff everyday to be a good specialist.</Paragraph>
          <HR hrWidth="80%" hrThickness={2} hrColor="#CB2A2A" Offset={25} />
          <Paragraph fontSize="1.5rem" lineHeight={1.8}>Studying last year on <Span Color="#CB2A2A">software-engeeniring</Span> in Kyiv National University of Trade and Economics</Paragraph>
        </Col>
      </Row>
      <Row FlexProps="0 0 10%" alignItems="flex-start" justifyContent="center">
        <Col textAlign="center">
          <SocialsContainer />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ScrollComponent />
        </Col>
      </Row>
    </Grid>
  </Header>
);

export default HeaderContainer;
