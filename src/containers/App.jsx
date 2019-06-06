import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ProjectPage from '../pages/ProjectPage';
import { ProjectsProvider } from '../modules/ProjectsProvider';
import { WindowProvider } from '../modules/WindowProvider';

const App = () => (
  <WindowProvider>
    <ProjectsProvider>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/projects/:id" component={ProjectPage} />
      </Switch>
    </ProjectsProvider>
  </WindowProvider>
);

export default App;
