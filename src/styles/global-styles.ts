import { createGlobalStyle } from 'styled-components';

import theme from './theme';
import ResetStyles from './reset-styles';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Mono:500,700|Inter:500,700,900&display=swap');

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
    font-family: 'Fira Mono', monospace;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }
  a {
    color: ${theme.text};
    text-decoration: inherit;
  }
  body {
    overflow-x: hidden;
    background-color: ${theme.background};
    color: ${theme.text};
  }
  img {
    width: auto;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
  .slick-slider {
    display: block;
  }
  .slick-track {
    display: flex;
  }
  .slick-list {
    overflow: hidden;
  }
  .slick-slide {
    padding: 0 10px;
    height: unset;
  }
`;

export default GlobalStyles;
