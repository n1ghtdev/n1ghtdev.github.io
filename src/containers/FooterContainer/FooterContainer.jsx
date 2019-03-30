import React from 'react';
import Footer from '../../components/Footer';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import SocialsContainer from '../SocialsContainer';
import Paragraph from '../../components/Paragraph';
import A from '../../components/A';

const FooterContainer = () => (
  <Footer>
    <Grid>
      <Row alignItems="center" justifyContent="space-between">
        <Col lg={2}>
          <SocialsContainer />
        </Col>
        <Col lg={2} textAlign="center" Padding="20px 0">
          <Paragraph FontSize=".875rem" Color="hsl(250, 10%, 45%)">developed by <A href="https://github.com/Nickew" target="_blank">Nickew</A></Paragraph>
        </Col>
      </Row>
    </Grid>
  </Footer>
);

export default FooterContainer;
