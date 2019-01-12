import React from 'react';
import Wrapper from '../components/Wrapper';
import HeaderSection from './HeaderSection';
import ProjectSection from './ProjectSection';
import AboutSection from './AboutSection';
import FooterSection from './FooterSection';

export default function Mainpage() {
  return (
    <Wrapper>
      <HeaderSection />
      <ProjectSection />
      <AboutSection />
      <FooterSection />
    </Wrapper>
  );
}
