import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import HeaderNavContainer from '../containers/HeaderNavContainer';
import ProjectsContainer from '../containers/ProjectsContainer';

const ProjectsPage = ({ match }) => (
  <Fragment>
    <HeaderNavContainer />
    <ProjectsContainer match={match} />
  </Fragment>
);

ProjectsPage.propTypes = {
  match: PropTypes.object,
};

export default ProjectsPage;
