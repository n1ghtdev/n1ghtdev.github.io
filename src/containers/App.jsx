import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Route, Switch } from 'react-router-dom';
import Projects from './Projects';
import Mainpage from './Mainpage';

library.add(fab);

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Mainpage} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  );
}

