import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ScrollRestoration extends Component {
  static propTypes = {
    location: PropTypes.object,
  }
  state = {
    // prevPageYPos: null,
    currentLocation: null,
  }
  prevPageYPos = 0
  componentDidMount() {
    this.setState({ currentLocation: this.props.location.pathname });

    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    // optional
    window.scrollTo(0, 0);
  }
  getSnapshotBeforeUpdate() {
    if (this.state.currentLocation !== this.props.location.pathname) {
      return window.pageYOffset;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null && snapshot > 0) {
      this.prevPageYPos = snapshot;
      window.scrollTo(0, 0);
    } else if (snapshot === null) {
      window.scrollTo(0, this.prevPageYPos);
    }
  }
  render() {
    return null;
  }
}

export default withRouter(ScrollRestoration);
