import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import './assets/reset.scss';
import './assets/base.scss';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <App />,
  MOUNT_NODE
);
