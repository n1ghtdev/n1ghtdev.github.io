import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithubSquare,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import MainPage from '../pages/MainPage';
import ProjectPage from '../pages/ProjectPage';
import { ProjectsProvider } from '../modules/ProjectsProvider';
import withSectionRestoration from '../modules/withSectionRestoration';
import { WindowProvider } from '../modules/WindowProvider';
library.add(faGithubSquare, faFacebook, faLinkedin, faEnvelopeSquare);

const App = props => (
  <WindowProvider>
    <ProjectsProvider>
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <MainPage
              {...routeProps}
              activeSection={props.activeSection}
              isRouteChanged={props.isRouteChanged}
              setActiveSection={props.setActiveSection}
              handleRouteChange={props.handleRouteChange}
            />
          )}
        />
        <Route exact path="/projects/:id" component={ProjectPage} />
      </Switch>
    </ProjectsProvider>
  </WindowProvider>
);

export default withSectionRestoration(App);
