import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { navigate } from '@reach/router';

import Head from './head';
import Header from './header';
import Footer from './footer';
import Socials from './socials';
import Container from './container';

import theme from '@styles/theme';
import GlobalStyles from '@styles/global-styles';

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
        {/* <Socials /> */}
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
