import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import LatestProjects from '../../components/LatestProjects';
import Project from '../../components/LatestProjects/Project';
import Line from '../../components/Line';

const latestProjects = [
  {
    number: 1,
    title: 'Latest project #1',
    description: 'This is latest projects section made with React and HTML5 semantic tags.',
    imgSrc: 'https://via.placeholder.com/960',
    imgAlt: 'Something here',
  },
  {
    number: 2,
    title: 'Latest project #2',
    description: 'This is latest projects section made with React and HTML5 semantic tags.',
    imgSrc: 'https://via.placeholder.com/960',
    imgAlt: 'Something here',
  },
  {
    number: 3,
    title: 'Latest project #3',
    description: 'This is latest projects section made with React and HTML5 semantic tags.',
    imgSrc: 'https://via.placeholder.com/960',
    imgAlt: 'Something here',
  },
];

class ProjectSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }
  render() {
    const renderProjects = latestProjects.map(project => (
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
    ));
    return (
      <Grid relative> 
        <Line vertical color="#dfdfdf" />
        <Line vertical color="#dfdfdf" align="right" />
        <LatestProjects>
          <Line vertical color="#dfdfdf" align="center" />
          { renderProjects } 
        </LatestProjects>
      </Grid>
    );
  }
}

ProjectSection.propTypes = {
  children: PropTypes.any,
};

export default ProjectSection;
