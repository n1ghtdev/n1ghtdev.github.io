import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Wrapper from '../components/Wrapper';
import { H1, H2 } from '../components/Headings';
import Header from '../components/Header';
import Section from '../components/Section';
import Particles from './Particles';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Col from '../components/Col';
import HeaderSection from './HeaderSection';
import ProjectSection from './ProjectSection';
import OtherProjectsSection from './OtherProjectsSection';
import AboutSection from './AboutSection';

library.add(fab);

export default function App() {
  return (
    <Wrapper>
      <HeaderSection />
      <ProjectSection />
      <OtherProjectsSection />
      <AboutSection />
    </Wrapper>
  );
}

