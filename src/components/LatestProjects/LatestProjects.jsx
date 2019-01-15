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

const LatestProjects = ({ projects, coords }) => (
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
            Style={{ transform: `translateX(${coords[project.number - 1]}px)` }}
          />
        </Col>
      </Row>
    )) }
  </Wrapper>
);

LatestProjects.propTypes = {
  projects: PropTypes.array,
  coords: PropTypes.arrayOf(PropTypes.number),
};

LatestProjects.Container = Container;

export default LatestProjects;
