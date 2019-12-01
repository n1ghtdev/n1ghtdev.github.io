import React from 'react';
import { Switch, Route } from 'react-router-dom';
import root from './root';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={root} />
    </Switch>
  );
};

export default Routes;
