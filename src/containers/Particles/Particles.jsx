import React from 'react';
import styled from 'styled-components';
import '../../../node_modules/particles.js/particles.min.js';

const ParticlesWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: inherit;
`;

class Particles extends React.Component {
  componentDidMount() {
    particlesJS.load('particles-js', 'src/assets/particles.json', () => console.log('ParticlesJS loaded.')); 
  }
  componentWillUnmount() {
    particlesJS.fn.vendors.destroy();
  }
  render() {
    return <ParticlesWrapper id="particles-js"  ref="particles-js" />; 
  }
}

export default Particles;

