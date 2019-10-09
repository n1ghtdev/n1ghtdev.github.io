import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import MainPage from './MainPage';
import ProjectsPage from './ProjectsPage';
import SingleProjectPage from './SingleProjectPage';
import Footer from './Footer';
import { ProjectsProvider } from '../modules/ProjectsProvider';
import { WindowProvider } from '../modules/WindowProvider';
import ScrollToTop from './ScrollToTop';

const appTheme = {
  primaryColor: '#212121',
  altPrimaryColor: '#191919',
  secondaryColor: '#E6E600',
  altSecondaryColor: '#D7C60C',
  textColor: '#F6FAFA',
};

const App = () => (
  <ThemeProvider theme={appTheme}>
    <WindowProvider>
      <ScrollToTop />
      <ProjectsProvider>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/projects/:id" component={SingleProjectPage} />
        </Switch>
      </ProjectsProvider>
      <Footer />
    </WindowProvider>
  </ThemeProvider>
);

export default App;
