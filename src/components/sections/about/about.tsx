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
import { fadeIn } from '@utils/gsap-animations';
import useIntersection from '@hooks/use-intersection';
import { about, github, linkedin } from '@config/index';

type Props = {};

function About(props: Props) {
  const ref = React.useRef(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      fadeIn('.about-fadeIn');
    }
  }, [intersection]);

  return (
    <Section id="about">
      <Wrapper ref={ref}>
        <Title className="about-fadeIn">About me</Title>
        <Illustration className="about-fadeIn">
          <IllustrationSVG />
        </Illustration>
        <Content className="about-fadeIn">
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
