import React from 'react';
import { Switch, Route } from 'react-router-dom';
import root from './root';
import Admin from './admin';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={root} />
      <Route exact path="/Admin" component={Admin} />
    </Switch>
  );
};

export default Routes;
