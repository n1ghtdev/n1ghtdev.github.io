import React, { FC } from 'react';
import { graphql } from 'gatsby';

import Projects from '@components/sections/projects';
import About from '@components/sections/about';
import App from '@components/app';

import Footer from '@components/footer';
import { SectionHero } from '@section/hero';
import { SectionProjects } from '@section/projects';

type Props = { location: Location };

const PageIndex: FC<Props> = (props) => {
  const { location } = props;

  return (
    <App location={location}>
      <SectionHero />
      <SectionProjects />
      <About />
      <Footer />
    </App>
  );
};

export default PageIndex;
