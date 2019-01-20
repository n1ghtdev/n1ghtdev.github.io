import React from 'react';
import Header from '../../components/Header';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';

const HeaderNavContainer = () => (
  <Header Height="60px">
    <Grid>
      <Row Height="60px" alignItems="center">
        <Col lg={6}><span style={{ color: '#fff' }}>Nk</span></Col>
        <Col lg={6}><span style={{ color: '#fff' }}>nav</span></Col>
      </Row>
    </Grid>
  </Header>
);

export default HeaderNavContainer;
