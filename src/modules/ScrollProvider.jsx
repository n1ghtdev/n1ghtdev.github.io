import React from 'react';
import PropTypes from 'prop-types';

const ScrollContext = React.createContext({ scrollY: 0 });

export class ScrollProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  state = {
    scrollY: 0,
  }
  componentDidMount() {
    const THROTTLE_INTERVAL = 400;
    this.intervalID = setInterval(this.handleInterval, THROTTLE_INTERVAL);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
    cancelAnimationFrame(this.requestID);
    this.requestID = null;
    this.intervalID = null;
  }
  // getWindowScrollTop = () =>
  //   window.pageYOffset ||
  //   document.documentElement.scrollTop;
  handleInterval = () => {
    cancelAnimationFrame(this.requestID);
    this.requestID = requestAnimationFrame(this.handleRAF);
  };
  handleRAF = () => {
    const { scrollY } = this.state;

    if (scrollY !== window.pageYOffset) {
      this.setState({ scrollY: window.pageYOffset });
    }
  };
  render() {
    return (
      <ScrollContext.Provider value={this.state}>
        { this.props.children }
      </ScrollContext.Provider>
    );
  }
}

export const withScroll = (ComposedComponent) => (props) => (
  <ScrollContext.Consumer>
    {({ scrollY }) => (
      <ComposedComponent {...props} scrollY={scrollY} />
    )}
  </ScrollContext.Consumer>
);
