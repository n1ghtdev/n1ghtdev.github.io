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
import IllustrationSVG from '../../assets/illustration';

const Hero = () => {
  return (
    <HeroSection id="hero">
      <Wrapper>
        <Content>
          <Title dangerouslySetInnerHTML={{ __html: hero.title }} />
          <Subtitle>{hero.subtitle}</Subtitle>
          <StyledButton to="projects">view projects</StyledButton>
        </Content>
        <Illustration>
          <IllustrationSVG />
        </Illustration>
        <Footer>
          <FooterTitle>developer tools</FooterTitle>
          <Tools>
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
