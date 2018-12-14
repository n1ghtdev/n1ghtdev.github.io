import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '../Grid';
import Row from '../Row';
import Col from '../Col';
import { H2 } from '../Headings';

const Projects = ({ children, projects }) => {
  return (
    <Grid justify="center">
      <Row>
        <Col Padding="15px 0px">
          <H2>Projects</H2>
        </Col>
      </Row>
      <Row>
        { projects.map(project => (
          <Col lg={3} md={3} sm={4} xs={12} Padding={0}>
            <img src={project.img} />
          </Col>
        )) }
      </Row>
    </Grid>
  );
};

Projects.propTypes = {
  children: PropTypes.any,
  projects: PropTypes.array,
};

export default Projects;

