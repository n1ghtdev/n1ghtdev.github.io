import React, { Fragment } from 'react';
import { navigate } from '@reach/router';

import Head from './head';
import Container from './container';

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
    <Fragment>
      <Head />
      <GlobalStyles />
      <Container>{children}</Container>
    </Fragment>
  );
};

export default Layout;
