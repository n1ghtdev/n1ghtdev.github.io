import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '../Grid';
import Row from '../Row';
import Col from '../Col';
import { H2 } from '../Headings';
import Item from './Item';

const Projects = ({ children, projects, ListStyle }) => {
  return (
    <Grid justify="center">
      <Row>
        <Col Padding="15px 0px">
          <H2>Projects</H2>
        </Col>
      </Row>
      <Row>
        <Col>

        </Col>
      </Row>
      <Row>
        { projects.map((project, i) => (
        <Col
          lg={ListStyle === 'photo' ? 3 : 12}
          md={ListStyle === 'photo' ? 3 : 12}
          sm={ListStyle === 'photo' ? 4 : 12}
          xs={12}
          Padding={0}
        >
          <Item
            key={i}
            ImgSrc={project.img.src}
            ImgAlt={project.img.alt}
            Title={project.title}
            Description={project.description}
            Link={project.link}
            Tools={project.tools}
          />
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

