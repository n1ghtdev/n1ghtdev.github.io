import React from 'react';
import PropTypes from 'prop-types';
import LatestProjects from '../../components/LatestProjects';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';
import { H3 } from '../../components/Headings';

const ProjectContainer = ({ project }) => (
  <LatestProjects.Item Id={project.id}>
    <LatestProjects.Header>
      <LatestProjects.Title as={H3} Color="#fff">{ project.title }</LatestProjects.Title>
      <Paragraph lineHeight={1.2}>{ project.description }</Paragraph>
      <Button href="#demo" Margin="40px 0 0 0" Theme="blue-squared">DEMO</Button>
    </LatestProjects.Header>
    <LatestProjects.Poster imgSrc={project.imgSrc} imgAlt={project.imgAlt} />
  </LatestProjects.Item>
);

ProjectContainer.propTypes = {
  project: PropTypes.object,
};

export default ProjectContainer;
