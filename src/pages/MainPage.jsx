import React from 'react';
import ArrowUpContainer from '../containers/ArrowUpContainer';
import HeaderContainer from '../containers/HeaderContainer';
import LatestSection from '../containers/LatestSection';
import OtherProjectsSection from '../containers/OtherProjectsSection';
import SkillSection from '../containers/SkillSection';
import FooterContainer from '../containers/FooterContainer';
import SectionTransition from '../containers/SectionTransition';
import { ScrollProvider } from '../modules/ScrollProvider';

class MainPage extends React.Component {
  skillSection = React.createRef();
  render() {
    return (
      <ScrollProvider>
        <ArrowUpContainer />
        <HeaderContainer />
        <LatestSection />
        <OtherProjectsSection />
        <SkillSection innerRef={this.skillSection} />
        <FooterContainer />
        <SectionTransition refObject={this.skillSection} />
      </ScrollProvider>
    );
  }
}

export default MainPage;
