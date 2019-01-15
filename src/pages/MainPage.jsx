import React, { Fragment } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import LatProjectsContainer from '../containers/LatProjectsContainer';
import AboutContainer from '../containers/AboutContainer';
import FooterContainer from '../containers/FooterContainer';

const MainPage = () => (
  <Fragment>
    <HeaderContainer />
    <LatProjectsContainer />
    <AboutContainer />
    <FooterContainer />
  </Fragment>
);

export default MainPage;
