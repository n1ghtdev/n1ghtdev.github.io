import React, { FC } from 'react';

import App from '@components/app';

import { SectionHero } from '@section/hero';
import { SectionProjects } from '@section/projects';
import { SectionAbout } from '@section/about';
import { SectionFooter } from '@section/footer';

type Props = { location: Location };

const PageIndex: FC<Props> = (props) => {
  const { location } = props;

  return (
    <App location={location}>
      <SectionHero />
      <SectionProjects />
      <SectionAbout />
      <SectionFooter />
    </App>
  );
};

export default PageIndex;
