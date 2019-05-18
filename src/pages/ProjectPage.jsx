import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AboutProjectSection from '../containers/AboutProjectSection';
import { withProjects } from '../modules/ProjectsProvider';

const ProjectPage = ({ projects, match }) => {
  const thisProject = projects.find(p => p.id === Number(match.params.id));

  return (
    <Fragment>
      <AboutProjectSection project={thisProject} />
    </Fragment>
  );
};

ProjectPage.propTypes = {
  projects: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

export default withProjects(ProjectPage);
