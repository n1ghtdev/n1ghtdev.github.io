import React from 'react';
import StyledAboutSection from './StyledAboutSection';
import SubTitle from './SubTitle';
import Skills from './Skills';

import Grid from '../../../components/Grid';
import Row from '../../../components/Row';
import Col from '../../../components/Col';
import Paragraph from '../../../components/Paragraph';
import StoryCard from './StoryCard';
import Anim from '../../../components/Anim';
import { H2 } from '../../../components/Headings';

const AboutSection = () => (
  <StyledAboutSection>
    <Grid>
      <Row Padding="35px 0 0 0">
        <Col textAlign="center">
          <H2
            FontSize="2.25rem"
            Color="#fff"
            FontFamily="Merriweather"
            FontWeight="bold"
            FontStyle="italic"
          >
            Who are you?
          </H2>
        </Col>
      </Row>
      <Row Padding="50px 0 0 0">
        <Col sm={12} lg={6}>
          <StoryCard title="Nikita @ nickew">
            <StoryCard.Paragraph>
              I always had a passion to develop something, that’s why I went
              studying software engineering. 2 years of learning object-oriented
              programming and software architecturing while writing code in C#
              got me bored. That’s where I started to think what can possibly
              interest me. I remembered that back in middle school I was
              creating websites with constructors like uCoz, and after a while
              managed to copy (ripping) others uCoz websites designs and make
              them as a templates.
            </StoryCard.Paragraph>
            <StoryCard.Paragraph>
              So I thought maybe I should give a chance to web development...and
              I did.
            </StoryCard.Paragraph>
          </StoryCard>
        </Col>
        <Col sm={12} lg={6}>
          <SubTitle>
            A 21 years old - based in Kyiv, Ukraine. Self-taught front-end
            developer with software engineering background.
          </SubTitle>
          <Paragraph
            FontSize="1.75rem"
            Color="#fff"
            FontFamily="Merriweather"
            FontStyle="italic"
            Margin="25px 0 0 0"
          >
            knowledge:
          </Paragraph>

          <Skills>
            <Skills.Item>latest ECMA-specifications;</Skills.Item>
            <Skills.Item>responsive web design;</Skills.Item>
            <Skills.Item>
              server & client communication (REST, graphql, websocket);
            </Skills.Item>
            <Skills.Item>js/react performance optimization;</Skills.Item>
            <Skills.Item>
              javascript essentials - Closures, Hoisting, Scopes;
            </Skills.Item>
            <Skills.Item>
              back-end development (wp/php, node.js/express);
            </Skills.Item>
            <Skills.Item>database design;</Skills.Item>
            <Skills.Item>OOP, SOLID.</Skills.Item>
          </Skills>
          <Anim anim="shake" duration={1} delay={1} iterationCount="2">
            <Paragraph
              FontSize="1.5rem"
              Color="#fff"
              FontFamily="Merriweather"
              FontStyle="italic"
              Margin="25px 0 10px 0"
            >
              Currently looking for a local office job to gain real-world
              experience in development.
            </Paragraph>
          </Anim>
        </Col>
      </Row>
    </Grid>
  </StyledAboutSection>
);

export default AboutSection;
