import React from 'react';
import PropTypes from 'prop-types';
import Parallax from '../../components/Parallax';

class ParallaxProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      scrollY: 0,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleParallax);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleParallax);
  }
  handleParallax = () => {
    const { scrollY } = window;
    this.setState({ scrollY });
  }
  render() {
    return (
      <Parallax style={{ transform: `translate(0px, ${this.state.scrollY / 10}%)` }}>
        {this.props.children}
      </Parallax>
    );
  }
}

ParallaxProvider.propTypes = {
  children: PropTypes.any,
};

export default ParallaxProvider;
