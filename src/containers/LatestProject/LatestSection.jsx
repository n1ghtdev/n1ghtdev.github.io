import React from 'react';
import PropTypes from 'prop-types';
import ProjectContainer from './ProjectContainer';

const LatestSection = ({ projects }) => (
  <React.Fragment>
    {projects.map(item => (
      <ProjectContainer key={item.id} project={item} />
    ))}
  </React.Fragment>
);

// <Section>
// <Grid fluid relative>
//   <LatestProjects>
//     { projects.map(item => (
//       <ProjectContainer key={item.id} project={item} />
//     )) }
//   </LatestProjects>
// </Grid>
// </Section>

LatestSection.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default LatestSection;
