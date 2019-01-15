import React from 'react';
import About from '../../components/About';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Skills from '../../components/Skills';
import { H2 } from '../../components/Headings';
import MonitorSvg from '../../components/MonitorSvg';
import WideButton from '../../components/WideButton';
import ToolsContainer from '../ToolsContainer';

const skillsData = [
  {
    title: 'Skill title #1',
    description: 'Description of skill #1',
  },
  {
    title: 'Skill title #2',
    description: 'Description of skill #2',
  },
  {
    title: 'Skill title #3',
    description: 'Description of skill #3',
  },
  {
    title: 'Skill title #4',
    description: 'Description of skill #4',
  },
];


const AboutContainer = () => (
  <About>
    <Grid>
      <Row>
        <Col Padding="70px 0" textAlign="center">
          <H2 Color="#fdfdfd" fontSize="2rem">Here a list of my skills and tools</H2>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Skills skills={[skillsData[0], skillsData[1]]} />
        </Col>
        <Col lg={4}>
          <MonitorSvg />
        </Col>
        <Col lg={4}>
          <Skills skills={[skillsData[2], skillsData[3]]} />
        </Col>
      </Row>
      <Row>
        <Col lg={12} Padding="40px 0">
          <ToolsContainer />
        </Col>
      </Row>
      <Row justify="center">
        <Col lg={10} md={12} Padding="80px 0 120px 0">
          <WideButton view="simple" to="/resume">resume</WideButton>
        </Col>
      </Row>
    </Grid>
  </About>
);

export default AboutContainer;
