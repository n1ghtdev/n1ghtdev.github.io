import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
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
        <Helmet>
          <title>n1ghtdev | Front End Developer</title>
          <meta property="og:title" content="n1ghtdev's Front End Portfolio" />
          <meta
            property="og:description"
            content="Front-end developer portfolio."
          />
          <meta
            name="description"
            content="Front-end developer portfolio."
          />
        </Helmet>
        <HomeSection />
        <AboutSection />
        <LatestProjectsSection />
        <ToolsSection />
      </Wrapper>
    );
  }
}

export default MainPage;
