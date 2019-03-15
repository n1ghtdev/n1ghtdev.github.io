import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowUp from '../../components/ArrowUp';

class ArrowUpContainer extends Component {
  static propTypes = {
    scrollY: PropTypes.number,
  }
  state = {
    visible: false,
    scrollY: this.props.scrollY,
  };
  static getDerivedStateFromProps(props, state) {
    if (props.scrollY !== state.scrollY) {
      return { scrollY: props.scrollY };
    }
    return null;
  }
  componentDidUpdate() {
    this.checkVisibility();
  }
  checkVisibility = () => {
    const { visible, scrollY } = this.state;

    if (!visible && scrollY > 1000) {
      this.setState({ visible: true });
    } else if (visible && scrollY < 1000) {
      this.setState({ visible: false });
    }
  }
  render() {
    return (
      <ArrowUp Visible={this.state.visible} />
    );
  }
}

export default ArrowUpContainer;
