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
          <title>Nickew | Front End Developer</title>
          <meta property="og:title" content="Nickew's Front End Portfolio" />
          <meta
            property="og:description"
            content="Portfolio of Front End Developer who's well experienced with React and JS in general."
          />
          <meta
            name="description"
            content="Portfolio of Front End Developer who's well experienced with React and JS in general."
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
