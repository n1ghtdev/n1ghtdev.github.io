import React, { Component } from 'react';

const withScroll = ComposedComponent => class scrollHandler extends Component {
  constructor() {
    super();

    this.state = {
      scrollY: this.getWindowScrollTop,
    };
  }

  componentDidMount() {
    const THROTTLE_INTERVAL = 200;
    this.intervalID = setInterval(this.handleInterval, THROTTLE_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    cancelAnimationFrame(this.requestID);
    this.requestID = null;
    this.intervalID = null;
  }

  getWindowScrollTop = () =>
    window.pageYOffset ||
    document.documentElement.scrollTop;

  handleInterval = () => {
    cancelAnimationFrame(this.requestID);
    this.requestID = requestAnimationFrame(this.handleRAF);
  };

  handleRAF = () => {
    const { scrollY } = this.state;

    if (scrollY !== this.getWindowScrollTop()) {
      this.setState({ scrollY: this.getWindowScrollTop() });
    }
  };

  render() {
    const { scrollY } = this.state;
    return (
      <ComposedComponent
        {...this.props}
        scrollY={scrollY}
      />
    );
  }
};

export default withScroll;
