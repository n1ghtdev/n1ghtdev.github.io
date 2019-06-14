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
          <StoryCard title="Nikita @ nickew my journey">
            <StoryCard.Paragraph>
              I always had a passion to develop something, that’s why I went
              studying software engineering. 2 years of learning object-oriented
              programming and software architecturing while writing code in C#
              got me bored. That’s where I started to think what can possibly
              interest me. I remembered that back in middle school I was
              creating websites with constructors like uCoz, and after a while
              managed to copy (ripping) others uCoz websites designs and make
              them as a templates. JUST FOR FUN.
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
            developer with software engingeering background.
          </SubTitle>
          <Paragraph
            FontSize="1.75rem"
            Color="#fff"
            FontFamily="Merriweather"
            FontStyle="italic"
            Margin="25px 0 0 0"
          >
            Skills:
          </Paragraph>

          <Skills>
            <Skills.Item>optimizing features in JavaScript;</Skills.Item>
            <Skills.Item>writing modern JavaScript code (es2015+);</Skills.Item>
            <Skills.Item>responsive web design;</Skills.Item>
            <Skills.Item>
              understanding how server & client communicates;
            </Skills.Item>
            <Skills.Item>
              JavaScript essentials - Closures, Hoisting, Scopes;
            </Skills.Item>
            <Skills.Item>Node.js/Express back-end development;</Skills.Item>
            <Skills.Item>designing database models;</Skills.Item>
            <Skills.Item>object-oriented principles.</Skills.Item>
          </Skills>
          <Anim anim="shake" duration={1} delay={1} iterationCount="2">
            <Paragraph
              FontSize="1.5rem"
              Color="#fff"
              FontFamily="Merriweather"
              FontStyle="italic"
              Margin="25px 0 0 0"
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
