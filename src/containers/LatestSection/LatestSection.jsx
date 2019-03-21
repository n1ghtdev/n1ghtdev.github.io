import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid';
import Section from '../../components/Section';
import LatestProjects from '../../components/LatestProjects';
import ProjectContainer from './ProjectContainer';
import withProjects from '../../utils/withProjects';

const LatestSection = ({ projects }) => {
  const projectsArray = Object.keys(projects).map(key => projects[key]);
  return (
    <Section>
      <Grid fluid relative>
        <LatestProjects>
          { projectsArray.map(item => (
            <ProjectContainer key={item.id} project={item} />
          )) }
        </LatestProjects>
      </Grid>
    </Section>
  );
};

LatestSection.propTypes = {
  projects: PropTypes.object.isRequired,
};

export default withProjects(LatestSection);
