import React, { Component } from 'react';
import MainHeaderSection from '../containers/MainHeaderSection';
import AboutSection from '../containers/AboutSection';
import LatestProjectSection from '../containers/LatestProjectSection';
import ToolsSection from '../containers/ToolsSection';
import FooterContainer from '../containers/FooterContainer';
import { WindowContext } from '../modules/WindowProvider';

class MainPage extends Component {
  static contextType = WindowContext;
  render() {
    return (
      <div style={{ margin: '15px' }}>
        <MainHeaderSection />
        <AboutSection />
        <LatestProjectSection />
        <ToolsSection />
        <FooterContainer />
      </div>
    );
  }
}

export default MainPage;
