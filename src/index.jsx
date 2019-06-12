/* polyfills which must be loaded internally (not dynamically) */
import 'regenerator-runtime/runtime';
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

/* dynamically loaded polyfills */
import polyfills from './polyfills';

/* react main component */
import App from './containers/App';

/* Global styles */
import './assets/reset.scss';
import './assets/base.scss';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    MOUNT_NODE,
  );
};

/* resolving dynamically loaded polyfills */
Promise.all(polyfills)
  .then(() => {
    render();
  })
  .catch(err => {
    throw err;
  });
