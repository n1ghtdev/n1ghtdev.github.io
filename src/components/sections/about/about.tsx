import React from 'react';
import {
  Wrapper,
  Title,
  Illustration,
  Content,
  Socials,
  Social,
} from './style';
import IllustrationSVG from '@components/assets/illustration';
import GithubRoundIcon from '@components/assets/github-round-icon';
import LinkedinIcon from '@components/assets/linkedin-icon';
import Section from '@components/section';
import useAnimation from '@hooks/use-animation';

import { about, github, linkedin } from '@config/index';

function About() {
  const ref = React.useRef(null);

  const animationClass = 'about-fade-in';
  useAnimation(ref, animationClass);

  return (
    <Section id="about">
      <Wrapper ref={ref}>
        <Title className={animationClass}>About me</Title>
        <Illustration className={animationClass}>
          <IllustrationSVG />
        </Illustration>
        <Content className={animationClass}>
          <div dangerouslySetInnerHTML={{ __html: about }} />
          <Socials>
            <Social>
              <a href={github}>
                <GithubRoundIcon />
                <span>github</span>
              </a>
            </Social>
            <Social>
              <a href={linkedin}>
                <LinkedinIcon />
                <span>linkedin</span>
              </a>
            </Social>
          </Socials>
        </Content>
      </Wrapper>
    </Section>
  );
}

export default About;
