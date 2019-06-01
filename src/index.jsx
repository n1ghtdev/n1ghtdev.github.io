import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './containers/App';

import './assets/reset.scss';
import './assets/base.scss';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  MOUNT_NODE
);
