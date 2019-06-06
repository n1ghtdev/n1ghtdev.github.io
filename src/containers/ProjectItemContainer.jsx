import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from '../components/ProjectItem';
import Col from '../components/Col';

const ProjectItemContainer = ({ project }) => (
  <Col lg={4} Padding="10px">
    <ProjectItem key={project.id} to={`/projects/${project.id}`}>
      <ProjectItem.Poster imgSrc={project.imgSrc} imgAlt={project.imgAlt} />
      <ProjectItem.Overlay>
        <ProjectItem.Title
          FontSize="1.125rem"
          FontFamily="Merriweather"
          FontStyle="italic"
        >
          {project.title}
        </ProjectItem.Title>
        <ProjectItem.Description Color="#000">
          {project.description}
        </ProjectItem.Description>
      </ProjectItem.Overlay>
    </ProjectItem>
  </Col>
);

ProjectItemContainer.propTypes = {
  project: PropTypes.array,
};

export default ProjectItemContainer;
