import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { animateScroll } from 'react-scroll';
import ArrowUp from '../../components/ArrowUp';

class ArrowUpContainer extends Component {
  static propTypes = {
    scrollY: PropTypes.number,
  }
  state = {
    visible: false,
    toggle: false,
    scrollY: this.props.scrollY,
  };
  static getDerivedStateFromProps(props, state) {
    if (props.scrollY !== state.scrollY) {
      return { scrollY: props.scrollY };
    }
    return null;
  }
  componentDidMount() {
    this.setState({ visible: true });
  }
  componentDidUpdate() {
    this.isVisible();
  }
  isVisible = () => {
    const { toggle, scrollY } = this.state;

    if (scrollY > 1000 && !toggle) {
      this.setState({ toggle: true });
    } else if (scrollY < 1000 && toggle) {
      this.setState({ toggle: false });
    }
  }
  scrollUp = () => {
    animateScroll.scrollToTop();
  }
  render() {
    return (
      <ArrowUp Visible={this.state.visible} Toggle={this.state.toggle} onClick={this.scrollUp} />
    );
  }
}

export default ArrowUpContainer;
