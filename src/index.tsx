import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as serviceWorker from './serviceWorker';
import Routes from './pages';
import theme from './theme';
import Lines from './components/Lines';
import Cursor from './components/Cursor';
import FirebaseProvider from './modules/Firebase';
import { StoreProvider } from './store';

/* Global styles */
import './assets/css/reset.scss';
import './assets/css/base.scss';

const MOUNT_NODE = document.getElementById('app');

const App = () => {
  return (
    <FirebaseProvider>
      <StoreProvider>
        <Routes />
        <Cursor />
      </StoreProvider>
    </FirebaseProvider>
  );
};

const GlobalStyles = createGlobalStyle`
  body {
    ${({ bgColor, Color }: { bgColor: string; Color: string }) => `
      background-color: ${bgColor};
      color: ${Color};
      `}
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
