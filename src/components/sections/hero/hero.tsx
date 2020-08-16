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
  Footer,
  FooterTitle,
  Tools,
  Tool,
} from './style';
import ToolIcon from '@components/tool-icon';
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
          <DividerOr>or</DividerOr>
          <ContactMe to="/#contact">Contact me</ContactMe>
        </Content>
        <Illustration className={animationClass}>
          <IllustrationSVG />
        </Illustration>
        <Footer>
          <FooterTitle className={animationClass}>Developer tools</FooterTitle>
          <Tools className={animationClass}>
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
