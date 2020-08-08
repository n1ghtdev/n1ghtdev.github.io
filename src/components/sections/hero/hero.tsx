import React from 'react';
import Button from '@components/button';
import ToolIcon from '@components/tool-icon';
import {
  HeroSection,
  Wrapper,
  Content,
  Title,
  Subtitle,
  Illustration,
  Footer,
  FooterTitle,
  Tools,
  Tool,
} from './style';

import { hero } from '@config/index';
import IllustrationSVG from '../../../assets/night.svg';

const Hero = () => {
  return (
    <HeroSection id="hero">
      <Wrapper>
        <Content>
          <Title dangerouslySetInnerHTML={{ __html: hero.title }} />
          <Subtitle>{hero.subtitle}</Subtitle>
          <Button to="projects">view projects</Button>
        </Content>
        <Illustration>
          <IllustrationSVG />
        </Illustration>
        <Footer>
          <FooterTitle>developer tools</FooterTitle>
          <Tools>
            {hero.tools.map((tool: string) => {
              return (
                <Tool>
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
