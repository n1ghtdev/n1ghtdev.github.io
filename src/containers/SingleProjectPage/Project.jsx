import React from 'react';
import PropTypes from 'prop-types';

import ProjectInfo from './ProjectInfo';
import ProjectTools from './ProjectTools';
import ImageBox from './ImageBox';

import Section from '../../components/Section';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';

const InnerProjectContainer = ({ project }) => (
  <Section>
    <Grid>
      <Row justifyContent="space-between" Padding="50px 0 0 0">
        <Col xs={12} lg={7}>
          <ProjectInfo
            title={project.title}
            description={project.description}
            type="full stack experience"
            date="May 2019"
            sourceLink={project.sourceLink}
            demoLink={project.demoLink}
          />
        </Col>
        <Col xs={12} lg={4} Padding="20px 0 0 0">
          <ProjectTools tools={project.tools} />
        </Col>
      </Row>
      <Row Padding="50px 0 0 0">
        <ImageBox imgSrc={project.images[0].src} alt={project.images[0].alt} />
      </Row>
      <Row justifyContent="space-between" Padding="50px 0 0 0">
        {project.images.slice(1, project.images.length).map(img => (
          <Col lg={6} Padding="0 10px">
            <img src={img.src} alt={img.alt} />
          </Col>
        ))}
      </Row>
    </Grid>
  </Section>
);

InnerProjectContainer.propTypes = {
  project: PropTypes.object.isRequired,
};

export default InnerProjectContainer;
