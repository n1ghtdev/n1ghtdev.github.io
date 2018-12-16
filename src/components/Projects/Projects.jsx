import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from '../Row';
import Col from '../Col';
import Item from './Item';

const Projects = ({ children, projects, ListStyle }) => {
  return (
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
  );
};

Projects.propTypes = {
  children: PropTypes.any,
  projects: PropTypes.array,
};

export default Projects;

