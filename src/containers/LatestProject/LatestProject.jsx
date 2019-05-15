import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid';
import Section from '../../components/Section';
import LatestProjects from '../../components/LatestProjects';
import Paragraph from '../../components/Paragraph';
import { H3 } from '../../components/Headings';

/* eslint-disable */
class LatestProject extends Component {
  render() {
    const { project } = this.props;
    return (
      <Section Height="inherit">
        <LatestProjects Id={project.id}>
          <LatestProjects.Header>
            <LatestProjects.Title
              as={H3}
              FontFamily="Lobster Two"
              FontSize="2.5rem"
              Color="#fff"
            >
              { project.title }
            </LatestProjects.Title>
            <Paragraph LineHeight={1.2}>{ project.description }</Paragraph>
            <LatestProjects.Button to={`/projects/${project.id}`}>demo</LatestProjects.Button>
          </LatestProjects.Header>
          <LatestProjects.Poster imgSrc={project.imgSrc} imgAlt={project.imgAlt} />
        </LatestProjects>
      </Section>
    );
  }
}

LatestProject.propTypes = {
  project: PropTypes.object,
};

export default LatestProject;
