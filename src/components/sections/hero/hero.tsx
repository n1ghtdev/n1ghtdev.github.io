import React from 'react';
import { hero, socials } from '@config/index';

import Section from '@components/section';
import * as styles from './hero.styles';

const Hero = () => {
  return (
    <Section id="hero">
      <styles.Wrapper>
        <styles.FlexContainer>
          <styles.Content>
            <styles.Header>
              <styles.Title>{hero.title}</styles.Title>
              <styles.Specialization>{hero.spec}</styles.Specialization>
            </styles.Header>
            <styles.Description>{hero.desc}</styles.Description>
            <styles.Buttons>
              <styles.EmailButton href={`mailto://${socials.email}`}>
                get in touch
              </styles.EmailButton>
              <styles.GithubButton href={socials.github}>
                github profile
              </styles.GithubButton>
            </styles.Buttons>
          </styles.Content>
        </styles.FlexContainer>
      </styles.Wrapper>
    </Section>
  );
};

export default Hero;
