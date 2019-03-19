import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import ScrollRestoration from './ScrollRestoration';
import MainPage from '../pages/MainPage';
import ProjectPage from '../pages/ProjectPage';

library.add(faGithubSquare, faFacebook, faLinkedin, faEnvelopeSquare);

const App = () => (
  <Fragment>
    <ScrollRestoration />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/projects/:id" component={ProjectPage} />
    </Switch>
  </Fragment>
);

export default App;
