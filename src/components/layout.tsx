import React from 'react';
import { ThemeProvider } from 'styled-components';
import { navigate } from '@reach/router';

import Head from './head';
import Container from './container';

import theme from '@styles/theme';
import GlobalStyles from '@styles/global-styles';

const Layout = ({
  children,
  location,
}: {
  children: React.ReactNode;
  location: any;
}) => {
  const hash = React.useRef(location.hash);

  React.useEffect(() => {
    if (hash.current) {
      navigate(hash.current);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head />
      <GlobalStyles />
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
