import React from 'react';
import Header from '../../components/Header';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Paragraph from '../../components/Paragraph';
import Span from '../../components/Span';
import HR from '../../components/HR';
import ScrollComponent from '../../components/ScrollComponent';
import SocialsContainer from '../SocialsContainer';

const HeaderContainer = () => (
  <Header>
    <Grid flex style={{ zIndex: '10' }} relative>
      <Row FlexProps="1" alignItems="center" justifyContent="center">
        <Col lg={8} sm={10} textAlign="center">
          <Header.Paragraph LineHeight={1.8}>
            Hi, my name is <Span Color="#3777F3">Nikita</Span>, I am an
            <Span Color="#CB2A2A">
              {' '}
              front-end <Span Color="#3777f3">(React)</Span> developer
            </Span>{' '}
            from Kyiv, Ukraine. Front-end is most fun thing I did for a while,
            not gonna leave it for sure. Learning new stuff everyday to improve
            my skills.
          </Header.Paragraph>
          <HR hrWidth="80%" hrThickness={2} hrColor="#CB2A2A" Offset={25} />
          <Header.Paragraph LineHeight={1.8}>
            Studying last year on
            <Span Color="#CB2A2A"> software-engeeniring</Span> in Kyiv National
            University of Trade and Economics
          </Header.Paragraph>
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
