import React from 'react';
import Wrapper from '../components/Wrapper';
import HeaderSection from './HeaderSection';
import ProjectSection from './ProjectSection';
import AboutSection from './AboutSection';

export default function Mainpage() {
  return (
    <Wrapper>
      <HeaderSection />
      <ProjectSection />
      <AboutSection />
    </Wrapper>
  );
}
