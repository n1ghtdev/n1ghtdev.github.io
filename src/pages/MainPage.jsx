import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import PropTypes from 'prop-types';
import ArrowUpContainer from '../containers/ArrowUpContainer';
import HeaderContainer from '../containers/HeaderContainer';
import LatestProject from '../containers/LatestProject';
import OtherProjectsSection from '../containers/OtherProjectsSection';
import SkillSection from '../containers/SkillSection';
import { withProjects } from '../modules/ProjectsProvider';
import { ScrollProvider } from '../modules/ScrollProvider';
import FooterContainer from '../containers/FooterContainer';
import { addPageFading, removePageFading } from '../utils/togglePageFading';

class MainPage extends React.Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
  };
  state = {
    arrowUpIsVisible: null,
  };
  onLeave = (origin, destination, direction) => {
    const { index } = origin;

    if (direction === 'down') {
      if (index === 2) {
        this.setState({ arrowUpIsVisible: true });
      } else if (index === 3) {
        addPageFading();
      }
    } else if (direction === 'up') {
      if (index === 3) {
        this.setState({ arrowUpIsVisible: false });
      } else if (index === 4) {
        removePageFading();
      }
    }
  };
  arrowUpOnClick = (callback, index) => {
    this.setState({ arrowUpIsVisible: false });
    removePageFading();
    callback(index);
  };
  render() {
    const { projects } = this.props;
    const { arrowUpIsVisible } = this.state;
    return (
      <ReactFullpage
        onLeave={this.onLeave}
        fixedElements="#arrow-up"
        render={({ state, fullpageApi }) => (
          <ScrollProvider>
            <ArrowUpContainer
              isVisible={arrowUpIsVisible}
              onClick={() => this.arrowUpOnClick(fullpageApi.moveTo, 1)}
            />
            <React.Fragment>
              <HeaderContainer />
              <LatestProject project={projects[0]} />
              <LatestProject project={projects[1]} />
              <OtherProjectsSection />
              <SkillSection />
              <FooterContainer />
            </React.Fragment>
          </ScrollProvider>
        )}
      />
    );
  }
}

export default withProjects(MainPage);
