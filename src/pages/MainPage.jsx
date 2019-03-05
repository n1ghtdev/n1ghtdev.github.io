import React, { Fragment } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import LatProjectsContainer from '../containers/LatProjectsContainer';
import OtherProjectsContainer from '../containers/OtherProjectsContainer';
import FooterContainer from '../containers/FooterContainer';
import ToolsContainer from '../containers/ToolsContainer';
import Line from '../components/Line';
import withScroll from '../utils/withScroll';

class MainPage extends React.Component {
  state = {
    scrollY: null,
    testElementY: null,
  };
  static getDerivedStateFromProps(props, state) {
    if (props.scrollY !== state.scrollY) {
      return { scrollY: props.scrollY };
    }
    return null;
  }
  componentDidMount() {
    const testElementY = this.testNode.node.offsetTop - this.testNode.node.offsetHeight;
    this.setState({ testElementY });
  }
  componentDidUpdate() {
    const { scrollY, testElementY } = this.state;
    if (scrollY >= testElementY + 450) {
      document.body.classList.add('transitioned');
    } else if (scrollY <= testElementY + 450 && document.body.classList.contains('transitioned')) {
      document.body.classList.remove('transitioned');
    }
  }
  render() {
    return (
      <Fragment>
        <Line LineColor="rgba(255,255,255,.025)" />
        <HeaderContainer />
        <LatProjectsContainer />
        <OtherProjectsContainer />
        <ToolsContainer ref={node => { this.testNode = node; }} />
        <FooterContainer />
      </Fragment>
    );
  }
}

export default withScroll(MainPage);
