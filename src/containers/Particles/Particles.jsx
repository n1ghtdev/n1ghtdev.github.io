import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../../../node_modules/particles.js/particles.min.js';

const ParticlesWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 70%;
`;

class Particles extends React.Component {
  componentDidMount() {
    particlesJS.load('particles-js', 'src/assets/particles.json', () => console.log('ParticlesJS loaded.')); 
  }
  componentWillUnmount() {
    // destroy
  }
  render() {
    return <ParticlesWrapper id="particles-js"  ref="particles-js" />; 
  }
}

export default Particles;
