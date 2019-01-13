import React from 'react';
import Header from '../../components/Header';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Logotype from '../../components/Logotype';
import Particles from '../Particles';
import Socials from '../../components/Socials';
import ScrolldownHint from '../../components/ScrolldownHint';
import Link from '../../components/Link';
import Line from '../../components/Line';

const HeaderSection = () => (
  <Header>
    <Grid relative flex>
      <Line vertical color="#0E2130" />
      <Line vertical color="#0E2130" align="center" />
      <Line vertical color="#0E2130" align="right" />
      <Row Height={50} alignItems="center">
        <Col lg={12} textAlign="right">
          <Link
            Style="grey"
            href="https://github.com/Nickew/nickew.github.io"
            target="_blank"
          >
                nickew.github.io
          </Link>
        </Col>
      </Row>
      <Row FlexProps="1" alignItems="center">
        <Col lg={11} md={11} sm={11}>
          <Logotype />
        </Col>
        <Col lg={1} md={1} sm={1}>
          <Socials />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ScrolldownHint />
        </Col>
      </Row>
    </Grid>
    <Particles />
  </Header>
);

export default HeaderSection;
