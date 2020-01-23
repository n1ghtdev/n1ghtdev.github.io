import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import ResetStyles from './ResetStyles';

const GlobalStyles = createGlobalStyle`
  ${ResetStyles}
  html {
    height: 100%;
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
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  body {
    overflow-x: hidden;
    min-height: 100%;
    background-color: ${theme.contrast};
    color: ${theme.brightDark};
    /* background-image: url('https://i.imgur.com/wwh7nDp.png'); */
    background-repeat: no-repeat;
    background-attachment: fixed;
    & > div:first-child {
      position: relative;
    }
  }

  img {
    width: auto;
    max-width: 100%;
    height: auto;
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
