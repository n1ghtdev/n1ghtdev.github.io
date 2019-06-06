import React from 'react';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Col from '../components/Col';
import Span from '../components/Span';
import A from '../components/A';

const FooterContainer = () => (
  <Footer>
    <Grid>
      <Row alignItems="center">
        <Col lg={12} textAlign="center">
          <Span FontSize="1.5rem" FontFamily="Roboto" FontWeight="thin">
            {'//////////////////////////////////////////////'} 2019 \\{' '}
            <A href="#">GITHUB/NICKEW</A>
          </Span>
        </Col>
      </Row>
    </Grid>
  </Footer>
);

export default FooterContainer;
