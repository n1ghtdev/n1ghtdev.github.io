import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ProjectsContainer from '../containers/ProjectsContainer';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Col from '../components/Col';
import Wrapper from '../components/Projects/Wrapper';
import List from '../components/List';
import Item from '../components/List/Item';

const categories = [
  {
    id: 0,
    title: 'all',
    url: '/',
  },
  {
    id: 1,
    title: 'html/css',
    url: '/html',
  },
  {
    id: 2,
    title: 'javascript',
    url: '/javascript',
  },
  {
    id: 3,
    title: 'back end',
    url: '/backend',
  },
];

const ProjectsPage = ({ match }) => (
  <Fragment>
    <Wrapper>
      <Grid>
        <Row>
          <Col textAlign="center" Padding="20px 0">
            <List>
              { categories.map((cat) => (
                <Item key={cat.id} to={`${match.url}${cat.url}`}>{cat.title}</Item>
              )) }
            </List>
          </Col>
        </Row>
        <Row>
          <Route path={`${match.path}/:catId`} component={ProjectsContainer} />
          <Route
            exact
            path={match.path}
            render={() => <h3>wtf is that route</h3>}
          />
        </Row>
      </Grid>
    </Wrapper>
  </Fragment>
);

export default ProjectsPage;
