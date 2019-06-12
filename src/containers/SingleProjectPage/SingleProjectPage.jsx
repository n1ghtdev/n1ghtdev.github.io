import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HeaderSection from '../HeaderSection';
import Project from './Project';

import { withProjects } from '../../modules/ProjectsProvider';

const Wrapper = styled.div`
  flex: 1 0 auto;
  /* fix ie11 flexbox image height bug */
  min-height: 1px;
`;

const SingleProjectPage = ({ projects, match }) => {
  const thisProject = projects.find(p => p.id === Number(match.params.id));

  return (
    <Wrapper>
      <HeaderSection />
      <Project project={thisProject} />
    </Wrapper>
  );
};

SingleProjectPage.propTypes = {
  projects: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

export default withProjects(SingleProjectPage);
