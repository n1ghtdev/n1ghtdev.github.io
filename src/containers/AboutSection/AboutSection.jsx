import React from 'react';
import About from '../../components/About';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Skills from '../../components/Skills';
import { H2 } from '../../components/Headings';
import SVGScreen from '../../components/Skills/SVGScreen';
import Tools from '../../components/Tools';
import ButtonLink from '../../components/Button/ButtonLink';

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

const toolsData = [
  {
    title: 'css',
    children: ['sass', 'styled'],
  },
  {
    title: 'javascript',
    children: ['es6', 'react', 'redux', 'jquery'],
  },
  {
    title: 'bundlers',
    children: ['webpack', 'gulp'],
  },
  {
    title: 'graphics',
    children: ['photoshop', 'figma', 'inkspace'],
  },
  {
    title: 'other',
    children: ['git', 'vim', 'bash'],
  },
  {
    title: 'back end',
    children: ['node.js', 'spring boot', 'mysql/postgres'],
  },
];

const AboutSection = () => {
  return (
    <About>
      <Grid>
        <Row>
          <Col Padding="35px 0" textAlign="center">
            <H2 Color="#fdfdfd" fontSize="2rem">Here a list of my skills and tools</H2>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Skills skills={[skillsData[0], skillsData[1]]} />
          </Col>
          <Col lg={4}>
            <SVGScreen />  
          </Col>
          <Col lg={4}>
            <Skills skills={[skillsData[2], skillsData[3]]} />  
          </Col>
        </Row>
        <Row>
          <Col lg={12} Padding="20px 0">
            <Tools tools={toolsData} />
          </Col>
        </Row>
        <Row justify="center">
          <Col lg={6} textAlign="center" Padding="80px 0 120px 0">
            <ButtonLink Mod="simple" to="/resume">resume</ButtonLink>
          </Col>
        </Row>
      </Grid>
    </About>
  );
};

export default AboutSection;

