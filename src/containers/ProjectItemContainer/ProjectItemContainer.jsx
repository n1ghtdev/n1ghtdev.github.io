import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

const ProjectItemContainer = ({ project }) => (
  <ProjectItem key={project.id} to={`/projects/${project.id}`}>
    <ProjectItem.Poster
      imgSrc={project.images[0].src}
      imgAlt={project.images[0].alt}
    />
    <ProjectItem.Overlay>
      <ProjectItem.Title
        FontSize="1.125rem"
        FontFamily="Merriweather"
        FontStyle="italic"
      >
        {project.title}
      </ProjectItem.Title>
    </ProjectItem.Overlay>
  </ProjectItem>
);

ProjectItemContainer.propTypes = {
  project: PropTypes.array,
};

export default ProjectItemContainer;
