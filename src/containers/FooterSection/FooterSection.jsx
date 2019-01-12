import React from 'react';
import Footer from '../../components/Footer';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';

const FooterSection = () => (
  <Footer>
    <Grid>
      <Row>
        <Col textAlign="center" Padding="20px 0">
          <span>developed by <a href="https://github.com/Nickew" target="_blank">Nickew</a></span>
        </Col>
      </Row>
    </Grid>
  </Footer>
);

export default FooterSection;
