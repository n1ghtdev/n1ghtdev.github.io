import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import OtherProjects from '../../components/OtherProjects';
import Project from '../../components/OtherProjects/Project';

const otherProjects = [
  {
    id: 0,
    title: 'Other project #1',
    tools: ['html', 'css'],
    description: 'Description of other projects section',
    imgSrc: 'https://via.placeholder.com/640',
    imgAlt: 'Image Alt',
  },
  {
    id: 1,
    title: 'Other project #1',
    tools: ['html', 'css', 'js'],
    description: 'Description of other projects section',
    imgSrc: 'https://via.placeholder.com/640',
    imgAlt: 'Image Alt',
  },
  {
    id: 2,
    title: 'Other project #1',
    tools: ['react', 'node.js'],
    description: 'Description of other projects section',
    imgSrc: 'https://via.placeholder.com/640',
    imgAlt: 'Image Alt',
  },
  {
    id: 3,
    title: 'Other project #1',
    tools: ['html', 'css'],
    description: 'Description of other projects section',
    imgSrc: 'https://via.placeholder.com/640',
    imgAlt: 'Image Alt',
  },
  {
    id: 4,
    title: 'Other project #1',
    tools: ['react', 'spring boot'],
    description: 'Description of other projects section',
    imgSrc: 'https://via.placeholder.com/640',
    imgAlt: 'Image Alt',
  },
  {
    id: 5,
    title: 'Other project #1',
    tools: ['figma', 'photoshop'],
    description: 'Description of other projects section',
    imgSrc: 'https://via.placeholder.com/640',
    imgAlt: 'Image Alt',
  },
];

const OtherProjectsSection = () => {
  return (
    <Grid fluid>
      <Row>
        { otherProjects.map(project => (
          <Col lg={4} key={project.id}>
            <Project
              title={project.title}
              tools={project.tools}
              description={project.description}
              imgSrc={project.imgSrc}
              imgAlt={project.imgAlt}
            />
          </Col>
        )) }        
      </Row>
    </Grid>
  );
};

OtherProjectsSection.propTypes = {
  children: PropTypes.any,
};

export default OtherProjectsSection;

