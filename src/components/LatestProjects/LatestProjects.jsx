import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Project from './Project';
import Row from '../Row';
import Col from '../Col';

const Container = styled.div``;

const Wrapper = styled.main`
  padding-bottom: 200px;
`;

const LatestProjects = ({ projects }) => (
  <Wrapper>
    { projects.map(project => (
      <Row key={project.number}>
        <Col>
          <Project
            Id={`${project.number}`}
            number={project.number}
            projectTitle={project.title}
            projectDesc={project.description}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
          />
        </Col>
      </Row>
    )) }
  </Wrapper>
);

LatestProjects.propTypes = {
  projects: PropTypes.array,
};

LatestProjects.Container = Container;

export default LatestProjects;
