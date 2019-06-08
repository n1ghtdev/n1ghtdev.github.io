import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import HeaderSection from '../HeaderSection';
import Project from './Project';

import { withProjects } from '../../modules/ProjectsProvider';

const SingleProjectPage = ({ projects, match }) => {
  const thisProject = projects.find(p => p.id === Number(match.params.id));

  return (
    <Fragment>
      <HeaderSection />
      <Project project={thisProject} />
    </Fragment>
  );
};

SingleProjectPage.propTypes = {
  projects: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

export default withProjects(SingleProjectPage);
