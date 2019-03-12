import React, { Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import MainPage from '../pages/MainPage';
library.add(faGithubSquare, faFacebook, faLinkedin, faEnvelopeSquare);

const App = () => (
  <Fragment>
    <MainPage />
  </Fragment>
);

export default App;
