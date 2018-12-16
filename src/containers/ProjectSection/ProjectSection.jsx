import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../components/Section';
import Projects from '../../components/Projects';
import Options from '../../components/Projects/Options';
import Button from '../../components/Projects/Options/Button';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import { H2 } from '../../components/Headings';

const projects = [
  {
    title: 'Project Blog',
    description: 'Simple blog developed with Spring Boot and React.',
    link: 'https://github.com/Nickew/project-blog',
    tools: ['html', 'css', 'js', 'java'],
    img: {
      src: 'https://via.placeholder.com/350',
    },
  },
  {
    title: 'Project Blog',
    description: 'Simple blog developed with Spring Boot and React.',
    link: 'https://github.com/Nickew/project-blog',
    tools: ['html', 'css', 'js', 'java'],
    img: {
      src: 'https://via.placeholder.com/350',
    },
  },
  {
    title: 'Project Blog',
    description: 'Simple blog developed with Spring Boot and React.',
    link: 'https://github.com/Nickew/project-blog',
    tools: ['html', 'css', 'js', 'java'],
    img: {
      src: 'https://via.placeholder.com/350',
    },
  },
  {
    title: 'Project Blog',
    description: 'Simple blog developed with Spring Boot and React.',
    link: 'https://github.com/Nickew/project-blog',
    tools: ['html', 'css', 'js', 'java'],
    img: {
      src: 'https://via.placeholder.com/350',
    },
  },
  {
    title: 'Project Blog',
    description: 'Simple blog developed with Spring Boot and React.',
    link: 'https://github.com/Nickew/project-blog',
    tools: ['html', 'css', 'js', 'java'],
    img: {
      src: 'https://via.placeholder.com/350',
    },
  },
];

class ProjectSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listStyle: 'list',
    };

    this.toggleListStyle = this.toggleListStyle.bind(this);
  }
  toggleListStyle(e) {
    this.setState({ listStyle: e.target.name});
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col Padding="15px 0px" textAlign="center">
            <H2>Projects</H2>
          </Col>
        </Row>
        <Row>
          <Col textAlign="center">
            <Options>
              <Button onClick={this.toggleListStyle} name="list">List</Button>
              <Button onClick={this.toggleListStyle} name="photo">Photo</Button>
            </Options>
          </Col>
        </Row>
        <Projects projects={projects} ListStyle={this.state.listStyle} />
      </Grid>  
    );
  }
}

ProjectSection.propTypes = {
  children: PropTypes.any,
};

export default ProjectSection;
