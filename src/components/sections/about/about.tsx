import React from 'react';
import {
  Wrapper,
  Title,
  Illustration,
  Content,
  SocialList,
  SocialItem,
} from './style';
import IllustrationSVG from '@components/assets/illustration';
import Section from '@components/section';
import { fadeIn } from '@utils/gsap-animations';
import useIntersection from '@hooks/use-intersection';
import { about, socials } from '@config/index';

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
          <SocialList>
            {Object.values(socials).map((item: any) => (
              <SocialItem>
                <a href={item.link}>{item.title}</a>
              </SocialItem>
            ))}
          </SocialList>
        </Content>
      </Wrapper>
    </Section>
  );
}

export default About;
