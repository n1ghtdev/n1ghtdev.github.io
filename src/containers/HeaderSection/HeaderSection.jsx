import React from 'react';
import Header from '../../components/Header';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Logotype from '../../components/Logotype';
import Particles from '../Particles';
import Socials from '../../components/Socials';

const HeaderSection = () => {
  return (
    <Header>
      <Grid relative flex>
        <Row>
          <Col lg={12}>
            <div style={{ 'background': 'grey'}}>nickew.github.io</div>
          </Col>
        </Row>
        <Row FlexProps="1" alignItems="center">
          <Col lg={5}>
            <Logotype />          
          </Col>
          <Col lg={7}>
            <Socials />
          </Col>
        </Row>
        <Row>
          <Col lg={12}> 
            <div style={{ 'background': 'grey'}}>latest projects</div>
          </Col>
        </Row>
      </Grid>
    </Header>
  );
};

export default HeaderSection;
