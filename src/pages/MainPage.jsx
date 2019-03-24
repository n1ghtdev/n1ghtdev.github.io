import React, { Fragment } from 'react';
import withScroll from '../utils/withScroll';
import ArrowUpContainer from '../containers/ArrowUpContainer';
import HeaderContainer from '../containers/HeaderContainer';
import LatestSection from '../containers/LatestSection';
import OtherProjectsSection from '../containers/OtherProjectsSection';
import SkillSection from '../containers/SkillSection';
import FooterContainer from '../containers/FooterContainer';

class MainPage extends React.Component {
  state = {
    scrollY: null,
    waypointY: null,
  }
  static getDerivedStateFromProps(props, state) {
    if (props.scrollY !== state.scrollY) {
      return { scrollY: props.scrollY };
    }
    return null;
  }
  componentDidMount() {
    const waypointY = this.triggerNode.node.offsetTop - this.triggerNode.node.offsetHeight;
    this.setState({ waypointY });
  }
  componentDidUpdate(prevProps, prevState) {
    const { scrollY, waypointY } = this.state;
    const newWaypointY = this.triggerNode.node.offsetTop - this.triggerNode.node.offsetHeight;

    if (prevState.waypointY !== newWaypointY) {
      /* eslint-disable-next-line react/no-did-update-set-state */
      this.setState({ waypointY: newWaypointY });
    }

    const { body } = document;
    if (scrollY >= waypointY + 450) {
      body.classList.add('transitioned');
    } else if (scrollY <= waypointY + 450 && body.classList.contains('transitioned')) {
      body.classList.remove('transitioned');
    }
  }
  render() {
    const { scrollY } = this.state;
    return (
      <Fragment>
        <ArrowUpContainer scrollY={scrollY} />
        <HeaderContainer />
        <LatestSection />
        <OtherProjectsSection />
        <SkillSection ref={node => { this.triggerNode = node; }} />
        <FooterContainer />
      </Fragment>
    );
  }
}

export default withScroll(MainPage);
