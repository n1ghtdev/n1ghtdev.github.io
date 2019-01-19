import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Logotype from '../../components/Logotype';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Wrapper from '../../components/Projects/Wrapper';
import { H2 } from '../../components/Headings';
import Paragraph from '../../components/Paragraph';
import Line from '../../components/Line';

const ProjectsContainer = () => (
  <Fragment>
    <Header Height="520px">
      <Grid borderColor="#0E2130">
        <Line vertical color="#0E2130" align="center" />
        <Row alignItems="center">
          <Col lg={6} Padding="20px 0">
            <Logotype />
          </Col>
          <Col lg={6} textAlign="center" Padding="20px 0 0 0">
            <H2 Color="#fff" fontSize="2rem">Projects</H2>
            <Paragraph Color="#fff">Some of projects are still in development</Paragraph>
          </Col>
        </Row>
      </Grid>
    </Header>
    <Wrapper>
      <Grid>
        <Row>
          <Col textAlign="center" Padding="20px 0">
            <H2 Color="#252525" fontSize="2rem">Projects</H2>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Fragment>
);


export default ProjectsContainer;
