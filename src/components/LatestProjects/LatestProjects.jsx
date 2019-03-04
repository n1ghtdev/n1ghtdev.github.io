import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Project from './Project';
import Row from '../Row';

const Wrapper = styled.main`
  max-width: 1360px;
  margin: 0 auto;
  padding-bottom: 200px;
`;

const LatestProjects = ({ projects }) => (
  <Wrapper>
    { projects.map(project => (
      <Project
        as={Row}
        key={project.id}
        Id={project.id}
        projectTitle={project.title}
        projectDesc={project.description}
        imgSrc={project.imgSrc}
        imgAlt={project.imgAlt}
      />
    )) }
  </Wrapper>
);

LatestProjects.propTypes = {
  projects: PropTypes.array,
};

export default LatestProjects;
