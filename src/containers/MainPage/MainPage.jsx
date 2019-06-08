import React, { Component } from 'react';
import styled from 'styled-components';

import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import LatestProjectsSection from './LatestProjectsSection';
import ToolsSection from './ToolsSection';

import { WindowContext } from '../../modules/WindowProvider';

const Wrapper = styled.div`
  margin: 15px;
`;

class MainPage extends Component {
  static contextType = WindowContext;
  render() {
    return (
      <Wrapper>
        <HomeSection />
        <AboutSection />
        <LatestProjectsSection />
        <ToolsSection />
      </Wrapper>
    );
  }
}

export default MainPage;
