import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import MainPage from '../pages/MainPage';

library.add(fab, fas);

export default function App() {
  return (
    <Fragment>
      <Route exact path="/" component={MainPage} />
    </Fragment>
  );
}
