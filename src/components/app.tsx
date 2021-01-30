import React, { Fragment, FC, useEffect, useRef } from 'react';
import { navigate } from '@reach/router';

import Head from './head';
import Container from './container';

import GlobalStyles from '@styles/global-styles';

type Props = {
  children: React.ReactNode;
  location: any;
};

const App: FC<Props> = (props) => {
  const { children, location } = props;

  const hash = useRef(location.hash);

  useEffect(() => {
    if (hash.current) navigate(hash.current);
  }, []);

  return (
    <Fragment>
      <Head />
      <GlobalStyles />
      <Container>{children}</Container>
    </Fragment>
  );
};

export default App;
