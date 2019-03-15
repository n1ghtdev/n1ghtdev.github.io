import React, { Fragment } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import LatestSection from '../containers/LatestSection';
import OtherProjectsContainer from '../containers/OtherProjectsContainer';
import FooterContainer from '../containers/FooterContainer';
import ToolsContainer from '../containers/ToolsContainer';
import ArrowUpContainer from '../containers/ArrowUpContainer';
import withScroll from '../utils/withScroll';

class MainPage extends React.Component {
  state = {
    scrollY: null,
    triggerElement: null,
  };
  static getDerivedStateFromProps(props, state) {
    if (props.scrollY !== state.scrollY) {
      return { scrollY: props.scrollY };
    }
    return null;
  }
  componentDidMount() {
    const triggerElement = this.triggerNode.node.offsetTop - this.triggerNode.node.offsetHeight;
    this.setState({ triggerElement });
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    const newTriggerElement = this.triggerNode.node.offsetTop - this.triggerNode.node.offsetHeight;
    if (prevState.triggerElement !== newTriggerElement && this.waitNode.state.fetched) {
      this.setState({ triggerElement: newTriggerElement });
      return true;
    }
    return false;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { scrollY, triggerElement } = this.state;

    if (!snapshot) {
      const { body } = document;
      if (scrollY >= triggerElement + 450) {
        body.classList.add('transitioned');
      } else if (scrollY <= triggerElement + 450 && body.classList.contains('transitioned')) {
        body.classList.remove('transitioned');
      }
    }
  }
  render() {
    const { scrollY } = this.state;
    return (
      <Fragment>
        <ArrowUpContainer scrollY={scrollY} />
        <HeaderContainer />
        <LatestSection ref={node => { this.waitNode = node; }} />
        <OtherProjectsContainer />
        <ToolsContainer ref={node => { this.triggerNode = node; }} />
        <FooterContainer />
      </Fragment>
    );
  }
}

export default withScroll(MainPage);
