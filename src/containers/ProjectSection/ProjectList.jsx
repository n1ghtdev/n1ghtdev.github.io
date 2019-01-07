import React from 'react';
import PropTypes from 'prop-types';
import LatestProjects from '../../components/LatestProjects';
import Project from '../../components/LatestProjects/Project';
import Row from '../../components/Row';
import Col from '../../components/Col';

const ProjectList = ({ projects }) => {
  return (
    <LatestProjects>
    { projects.map(project => (
      <Row key={project.number}>
        <Col>
          <Project
            number={project.number}
            projectTitle={project.title}
            projectDesc={project.description}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
          />
        </Col>
      </Row>
      )) }
    </LatestProjects>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array,
};

export default ProjectList;
