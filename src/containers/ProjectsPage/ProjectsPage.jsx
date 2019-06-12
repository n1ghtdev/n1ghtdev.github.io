import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';

import HeaderSection from '../HeaderSection';
import { withProjects } from '../../modules/ProjectsProvider';
import ProjectItemContainer from '../ProjectItemContainer';

const Wrapper = styled.div`
  flex: 1 0 auto;
`;

const ProjectsPage = ({ projects }) => (
  <Wrapper>
    <HeaderSection />
    <Grid>
      <Row Padding="40px 0 0 0">
        {projects.map(project => (
          <Col lg={4} Padding="10px">
            <ProjectItemContainer project={project} />
          </Col>
        ))}
      </Row>
    </Grid>
  </Wrapper>
);

ProjectsPage.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default withProjects(ProjectsPage);
