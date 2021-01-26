import { createGlobalStyle } from 'styled-components';

import { THEME } from './theme';
import ResetStyles from './reset-styles';

const GlobalStyles = createGlobalStyle`
  ${ResetStyles}
  html {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    font-family: 'Fira Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }
  a {
    color: ${THEME.LIGHT};
    text-decoration: inherit;
  }
  body {
    overflow-x: hidden;
    background-color: ${THEME.DARK};
    color: ${THEME.LIGHT};
  }
  img {
    width: auto;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
`;

export default GlobalStyles;
