import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import PropTypes from 'prop-types';
import ArrowUpContainer from '../containers/ArrowUpContainer';
import HeaderContainer from '../containers/HeaderContainer';
import LatestProject from '../containers/LatestProject';
import OtherProjectsSection from '../containers/OtherProjectsSection';
import SkillSection from '../containers/SkillSection';
import FooterContainer from '../containers/FooterContainer';
import { addPageFading, removePageFading } from '../utils/togglePageFading';
import { withProjects } from '../modules/ProjectsProvider';
import { WindowContext } from '../modules/WindowProvider';

class MainPage extends React.Component {
  static contextType = WindowContext;
  static propTypes = {
    projects: PropTypes.array.isRequired,
    activeSection: PropTypes.number,
    isRouteChanged: PropTypes.bool,
    handleRouteChange: PropTypes.func,
    setActiveSection: PropTypes.func,
    history: PropTypes.object.isRequired,
  };
  state = {
    arrowUpIsVisible: null,
  };
  componentDidMount() {
    this.toggleFullPage();
  }
  componentDidUpdate() {
    this.toggleFullPage();
  }
  componentWillUnmount() {
    if (this.props.history.action === 'PUSH') {
      this.props.handleRouteChange(true);
      window.fullpage_api.destroy('all');
    }
  }
  onLeave = (origin, destination, direction) => {
    const { index } = origin;

    this.props.setActiveSection(destination.index + 1);

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
  toggleFullPage = () => {
    const { width, isMobile } = this.context;

    if (window.fullpage_api !== undefined && width !== undefined) {
      if (isMobile) {
        window.fullpage_api.destroy('all');
      } else if (width <= 768) {
        window.fullpage_api.setResponsive(true);
      } else {
        window.fullpage_api.setResponsive(false);
      }
    }
  };
  arrowUpOnClick = () => {
    this.setState({ arrowUpIsVisible: false });
    removePageFading();
    window.fullpage_api.moveTo(1);
  };
  afterRender = () => {
    if (this.props.isRouteChanged && window.fullpage_api !== undefined) {
      window.fullpage_api.moveTo(this.props.activeSection);
      /* set isPageRestored to false, after it's had been restored and move to saved section */
      this.props.handleRouteChange(false);
    }
  };
  render() {
    const { projects } = this.props;
    return (
      <ReactFullpage
        onLeave={this.onLeave}
        afterRender={this.afterRender}
        render={() => (
          <React.Fragment>
            <ArrowUpContainer
              isVisible={this.state.arrowUpIsVisible}
              onClick={this.arrowUpOnClick}
            />
            <HeaderContainer />
            <LatestProject project={projects[0]} />
            <LatestProject project={projects[1]} />
            <OtherProjectsSection />
            <SkillSection />
            <FooterContainer />
          </React.Fragment>
        )}
      />
    );
  }
}

export default withProjects(MainPage);
