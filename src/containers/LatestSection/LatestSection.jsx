import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid';
import Section from '../../components/Section';
import LatestProjects from '../../components/LatestProjects';
import ProjectContainer from './ProjectContainer';
import { withProjects } from '../../modules/ProjectsProvider';

const LatestSection = ({ projects }) => (
  <Section>
    <Grid fluid relative>
      <LatestProjects>
        { projects.map(item => (
          <ProjectContainer key={item.id} project={item} />
        )) }
      </LatestProjects>
    </Grid>
  </Section>
);

LatestSection.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default withProjects(LatestSection);
