import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './Root';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Root} />
    </Switch>
  );
};

export default Routes;
