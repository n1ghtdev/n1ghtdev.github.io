import React from 'react';
import PropTypes from 'prop-types';

import ExploreMore from './ExploreMore';
import Section from '../../../components/Section';
import Grid from '../../../components/Grid';
import Row from '../../../components/Row';
import Col from '../../../components/Col';
import { H2 } from '../../../components/Headings';

import ProjectItemContainer from '../../ProjectItemContainer';
import { withProjects } from '../../../modules/ProjectsProvider';

const LatestProjectsSection = ({ projects }) => {
  const latestProjects = projects.slice(0, 5);
  return (
    <Section>
      <Grid>
        <Row Padding="75px 0">
          <Col lg={12} textAlign="center">
            <H2
              Color="#16181D"
              FontFamily="Merriweather"
              FontSize="2rem"
              FontStyle="italic"
            >
              {'<>'} some of my latest work {'</>'}
            </H2>
          </Col>
        </Row>
        <Row>
          {latestProjects.map(project => (
            <Col lg={4} Padding="10px">
              <ProjectItemContainer project={project} />
            </Col>
          ))}
          <Col lg={4} Padding="10px">
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
