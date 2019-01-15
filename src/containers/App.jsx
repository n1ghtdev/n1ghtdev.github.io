import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ProjectsPage from '../pages/ProjectsPage';

library.add(fab);

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/projects" component={ProjectsPage} />
    </Switch>
  );
}

