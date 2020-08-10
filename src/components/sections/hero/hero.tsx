import React from 'react';
import ToolIcon from '@components/tool-icon';
import {
  HeroSection,
  Wrapper,
  Content,
  Title,
  Subtitle,
  StyledButton,
  Illustration,
  Footer,
  FooterTitle,
  Tools,
  Tool,
} from './style';

import { hero } from '@config/index';
import useIntersection from '@hooks/use-intersection';
import { fadeIn, fadeOut } from '@utils/gsap-animations';
import IllustrationSVG from '../../assets/illustration';

const Hero = () => {
  const ref = React.useRef(null);

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  });

  React.useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      fadeIn('.hero-fadeIn');
    } else {
      fadeOut('.hero-fadeIn');
    }
  }, [intersection]);

  return (
    <HeroSection id="hero">
      <Wrapper ref={ref}>
        <Content>
          <Title
            className="hero-fadeIn"
            dangerouslySetInnerHTML={{ __html: hero.title }}
          />
          <Subtitle className="hero-fadeIn">{hero.subtitle}</Subtitle>
          <StyledButton className="hero-fadeIn" to="projects">
            view projects
          </StyledButton>
        </Content>
        <Illustration className="hero-fadeIn">
          <IllustrationSVG />
        </Illustration>
        <Footer>
          <FooterTitle className="hero-fadeIn">developer tools</FooterTitle>
          <Tools className="hero-fadeIn">
            {hero.tools.map((tool: string, idx: number) => {
              return (
                <Tool animationOrder={idx}>
                  <ToolIcon name={tool} />
                </Tool>
              );
            })}
          </Tools>
        </Footer>
      </Wrapper>
    </HeroSection>
  );
};

export default Hero;
