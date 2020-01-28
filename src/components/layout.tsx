import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { navigate } from '@reach/router';

import Head from './head';
import Header from './header';
import Footer from './footer';
import Socials from './socials';
import Container from './container';

import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';

const Wrapper = styled.div`
  overflow: hidden;
`;

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
    <Wrapper id="root">
      <ThemeProvider theme={theme}>
        <Head />
        <GlobalStyles />
        <Socials />
        <Header />
        <Container>
          {children}
          <Footer />
        </Container>
      </ThemeProvider>
    </Wrapper>
  );
};

export default Layout;
