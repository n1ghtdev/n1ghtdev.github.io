import React from 'react';
import Wrapper from '../components/Wrapper';
import { H1, H2 } from '../components/Headings';
import Header from '../components/Header';
import Section from '../components/Section';
import Particles from './Particles';

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Particles />
      <Section Height="100vh" Background="url(./src/assets/img/top-bg.png)">
        <H1 hColor="green">Heading1</H1>
        <H2 hColor="red">H2 in red color</H2>
      </Section>
    </Wrapper>
  );
}
