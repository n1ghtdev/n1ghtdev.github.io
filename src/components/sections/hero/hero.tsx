import React from 'react';
import {
  HeroSection,
  Wrapper,
  Content,
  Title,
  Subtitle,
  StyledButton,
  ContactMe,
  DividerOr,
  Illustration,
} from './style';
import IllustrationSVG from '../../assets/illustration';

import { hero } from '@config/index';
import useAnimation from '@hooks/use-animation';

const Hero = () => {
  const ref = React.useRef(null);

  const animationClass = 'hero-fade-in';
  useAnimation(ref, animationClass);

  return (
    <HeroSection id="hero">
      <Wrapper ref={ref}>
        <Content>
          <Title
            className={animationClass}
            dangerouslySetInnerHTML={{ __html: hero.title }}
          />
          <Subtitle className={animationClass}>{hero.subtitle}</Subtitle>
          <StyledButton className={animationClass} to="/#projects">
            view projects
          </StyledButton>
          <DividerOr className={animationClass}>or</DividerOr>
          <ContactMe className={animationClass} to="/#contact">
            Contact me
          </ContactMe>
        </Content>
        <Illustration className={animationClass}>
          <IllustrationSVG />
        </Illustration>
      </Wrapper>
    </HeroSection>
  );
};

export default Hero;
