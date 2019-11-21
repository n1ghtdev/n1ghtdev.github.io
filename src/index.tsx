import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import * as serviceWorker from './serviceWorker';
import Routes from './routes';
import theme from './theme';
import Lines from './views/Lines';
/* Global styles */
import './assets/reset.scss';
import './assets/base.scss';

const MOUNT_NODE = document.getElementById('app');

const App = () => <Routes />;

const GlobalStyles = createGlobalStyle`
  body {
    ${({ bgColor, Color }: { bgColor: string; Color: string }) =>
      `background-color: ${bgColor || '#fff'}; color: ${Color || '#fff'}`}
    background-image: url('https://i.imgur.com/wwh7nDp.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

const render = () => {
  ReactDOM.render(
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles bgColor={theme.contrast} Color={theme.bright} />
        <Lines />
        <App />
      </ThemeProvider>
    </Router>,
    MOUNT_NODE,
  );
};

render();

serviceWorker.unregister();
