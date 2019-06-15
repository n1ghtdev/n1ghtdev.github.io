import React from 'react';
import PropTypes from 'prop-types';

import ExploreMore from './ExploreMore';
import Title from './Title';

import Section from '../../../components/Section';
import Grid from '../../../components/Grid';
import Row from '../../../components/Row';
import Col from '../../../components/Col';

import ProjectItemContainer from '../../ProjectItemContainer';
import { withProjects } from '../../../modules/ProjectsProvider';

const LatestProjectsSection = ({ projects }) => {
  const latestProjects = projects.slice(0, 5);
  return (
    <Section>
      <Grid>
        <Row Padding="75px 0">
          <Col lg={12} textAlign="center">
            <Title>
              {'<>'} latest projects {'</>'}
            </Title>
          </Col>
        </Row>
        <Row>
          {latestProjects.map(project => (
            <Col xs={12} sm={6} lg={4} Padding="10px">
              <ProjectItemContainer project={project} />
            </Col>
          ))}
          <Col xs={12} sm={6} lg={4} Padding="10px">
            <ExploreMore to="/projects" />
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

LatestProjectsSection.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default withProjects(LatestProjectsSection);
