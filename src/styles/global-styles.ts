import { createGlobalStyle } from 'styled-components';

import theme from './theme';
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
    font-family: 'Fira Sans', 'Poppins', sans-serif;
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
