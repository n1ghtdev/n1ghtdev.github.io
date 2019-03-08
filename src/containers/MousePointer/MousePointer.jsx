import React, { Component } from 'react';
import CustomCursor from '../../components/CustomCursor';

class MousePointer extends Component {
  state = {
    x: null,
    y: null,
    opacity: 0,
    isHover: false,
    isClicked: false,
  };
  componentDidMount() {
    window.addEventListener('mousemove', this.handlePointer);
    window.addEventListener('click', this.handleClick);
    // window.addEventListener('mouseover', this.handleHover);
    [...document.querySelectorAll('a')].map(el => {
      el.addEventListener('mouseenter', () => {
        this.setState({ isHover: true });
      });
      el.addEventListener('mouseleave', () => {
        this.setState({ isHover: false });
      });
      // el.addEventListener('mouseleave', this.setState({ isHover: false }));
    });
  }
  componentWillUnmount() {
    window.removeEventListener(this.handlePointer);
  }
  handlePointer = (e) => {
    const { clientX, clientY } = e;
    // console.log(this.state.isHover);
    this.setState({ x: clientX, y: clientY, opacity: 1 });
  };
  handleClick = () => {
    this.setState({ isClicked: true });

    setTimeout(() => {
      this.setState({ isClicked: false });
    }, 450);
  };
  // handleHover = (e) => {
  //   const hadTrigger = !!Object.keys(e.toElement.attributes)
  //     .map(prop => e.toElement.attributes[prop])
  //     .find(attr => attr.name === 'href');

  //   if (hadTrigger) {
  //     this.setState({ isHover: true });
  //   } else {
  //     this.setState({ isHover: false });
  //   }
  // };
  render() {
    const { x, y, isHover, isClicked } = this.state;
    return (
      <CustomCursor X={x} Y={y} Opacity={this.state.opacity} isHover={isHover} isClicked={isClicked} />
    );
  }
}

export default MousePointer;
