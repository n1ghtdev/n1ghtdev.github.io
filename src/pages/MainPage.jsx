import React, { Component, Fragment } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import AboutSection from '../containers/AboutSection';
import LatestProjectSection from '../containers/LatestProjectSection';
import ToolsSection from '../containers/ToolsSection';
import FooterContainer from '../containers/FooterContainer';
import { WindowContext } from '../modules/WindowProvider';

class MainPage extends Component {
  static contextType = WindowContext;
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <AboutSection />
        <LatestProjectSection />
        <ToolsSection />
        <FooterContainer />
      </Fragment>
    );
  }
}

export default MainPage;
