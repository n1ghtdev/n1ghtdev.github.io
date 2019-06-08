import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SingleProjectPage from './SingleProjectPage';
import Footer from './Footer';
import { ProjectsProvider } from '../modules/ProjectsProvider';
import { WindowProvider } from '../modules/WindowProvider';

const App = () => (
  <WindowProvider>
    <ProjectsProvider>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/projects/:id" component={SingleProjectPage} />
      </Switch>
    </ProjectsProvider>
    <Footer />
  </WindowProvider>
);

export default App;
