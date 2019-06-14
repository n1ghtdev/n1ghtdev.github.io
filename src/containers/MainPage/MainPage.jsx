import React, { Component } from 'react';
import styled from 'styled-components';

import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import LatestProjectsSection from './LatestProjectsSection';
import ToolsSection from './ToolsSection';
import { device } from '../../breakpoints';

import { WindowContext } from '../../modules/WindowProvider';

const Wrapper = styled.div`
  margin: 15px;
  @media ${device.mobile} {
    margin: 0;
  }
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
