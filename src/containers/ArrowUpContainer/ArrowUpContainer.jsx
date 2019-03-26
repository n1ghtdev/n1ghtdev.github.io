import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { animateScroll } from 'react-scroll';
import ArrowUp from '../../components/ArrowUp';
import { withScroll } from '../../modules/ScrollProvider';

class ArrowUpContainer extends Component {
  static propTypes = {
    scrollY: PropTypes.number,
  }
  state = {
    toggle: null,
  }
  componentDidUpdate(prevProps) {
    if (prevProps.scrollY !== this.props.scrollY) {
      this.isVisible();
    }
  }
  isVisible = () => {
    const { toggle } = this.state;
    const { scrollY } = this.props;

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
      <ArrowUp Toggle={this.state.toggle} onClick={this.scrollUp} />
    );
  }
}

export default withScroll(ArrowUpContainer);
