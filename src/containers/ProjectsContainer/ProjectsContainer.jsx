import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ProjectList from './ProjectList';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Wrapper from '../../components/Projects/Wrapper';
import List from '../../components/List';
import Item from '../../components/List/Item';
import HR from '../../components/HR';

const categories = [
  {
    id: 0,
    title: 'all',
    url: '',
  },
  {
    id: 1,
    title: 'html/css',
    url: '/htmlcss',
  },
  {
    id: 2,
    title: 'javascript',
    url: '/javascript',
  },
  {
    id: 3,
    title: 'backend',
    url: '/backend',
  },
  {
    id: 4,
    title: 'design',
    url: '/design',
  },
  {
    id: 5,
    title: 'other',
    url: '/other',
  },
];

const ProjectsContainer = ({ match }) => (
  <Wrapper>
    <Grid>
      <Row>
        <Col textAlign="center" Padding="60px 0 0 0">
          <List>
            { categories.map((cat) => (
              <Item key={cat.id} to={`${match.url}${cat.url}`}>{cat.title}</Item>
            )) }
          </List>
        </Col>
      </Row>
      <Row>
        <Col textAlign="center" Padding="40px 0 0 0">
          <HR />
        </Col>
      </Row>
      <Row justify="space-between">
        <Route path={`${match.path}/:catId`} component={ProjectList} />
        <Route
          exact
          path={match.path}
          component={ProjectList}
        />
      </Row>
    </Grid>
  </Wrapper>
);

ProjectsContainer.propTypes = {
  match: PropTypes.object,
};

export default ProjectsContainer;
