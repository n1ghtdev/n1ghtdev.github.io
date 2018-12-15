import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Projects from '../../components/Projects';

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
  }
  toggleListStyle = () => {
    //this.setState({ listStyle: })
  }
  render() {
    return (
      <Projects projects={projects} listStyle={this.state.listStyle} />    
    );
  }
}

ProjectSection.propTypes = {
  children: PropTypes.any,
};

export default ProjectSection;
