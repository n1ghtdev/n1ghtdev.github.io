import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import { navigate } from '@reach/router';

import Header from './header';
import Footer from './footer';
import Links from './links';
import Container from './container';

import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';

const Layout = ({
  children,
  location,
}: {
  children: React.ReactNode;
  location: any;
}) => {
  // store location.hash first value on render in ref
  // it gives us possibility to use empty array of deps in useEffect
  const hash = React.useRef(location.hash);
  React.useEffect(() => {
    if (hash.current) {
      navigate(hash.current);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>n1ghtdev | Front End Developer</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nickew.design/" />
        <meta property="og:image" content="https://i.imgur.com/KhVoogP.png" />
        <meta property="og:image:width" content="590" />
        <meta property="og:image:height" content="440" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          href="https://i.imgur.com/ZZbWYlp.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#007050" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <Links />
      <Header />
      <Container>
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
