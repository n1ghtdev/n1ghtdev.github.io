/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import '../../assets/libs/particles.min';

const ParticlesWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: inherit;
`;

class Particles extends React.Component {
  componentDidMount() {
    particlesJS.load('particles-js', 'src/assets/particles.json');
  }
  componentWillUnmount() {
    particlesJS.destroypJS();
  }
  render() {
    return <ParticlesWrapper id="particles-js"  ref="particles-js" />;
  }
}

export default Particles;

