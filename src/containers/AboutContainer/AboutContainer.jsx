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
    id: 0,
    title: 'HTML/CSS development',
    description: 'BEM-methodology, HTML5-semantics, SEO-friendly tags, responsive WEB-development.',
  },
  {
    id: 1,
    title: 'JavaScript experienced',
    description: 'Writing well-optimized modern JS code for client-side development. Reading ECMAScript specifications, learning about most performant ways to develop solutions.',
  },
  {
    id: 2,
    title: 'Front-end frameworks',
    description: 'Working with React most of the time. Don\'t mind learning new stuff. ',
  },
  {
    id: 3,
    title: 'Tools matter',
    description: 'Building with Webpack became almost an standard in JS development. Let\'s not forget about some other stuff like: Babel, Jest, Enzyme, Sass, Eslint...',
  },
];


const AboutContainer = () => (
  <About>
    <Grid>
      <Row>
        <Col Padding="60px 0" textAlign="center">
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
        <Col lg={10} md={12} Padding="60px 0 100px 0">
          <WideButton Style="simple" to="/resume">resume</WideButton>
        </Col>
      </Row>
    </Grid>
  </About>
);

export default AboutContainer;
