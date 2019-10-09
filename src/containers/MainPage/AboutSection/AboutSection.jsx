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
          <StoryCard title="Nikita @ n1ghtdev">
            <StoryCard.Paragraph>
              I always had a passion to create things, that’s why I went
              studying programming. After 2 years of learning object-oriented
              programming and software architecturing got me bored. By that time{' '}
              {"I've"} done some projects with programming languages like C#,
              Java - and did it pretty well but still wanted to try other things
              that might be more enjoyable. Not gonna lie I chose front-end only
              because I liked how it sounds furthermore I had already some
              experience with web-dev back in middle school. At the beginning of
              learning it was easy to follow just some html and css. At other
              hand there is JavaScript - which is hard to learn without any
              help. There was a time when I burned out because of many
              unfamiliar tools which I was trying to use without even knowing
              what they are for (it was webpack/redux/sagas). After a while I
              did actually back to further learning and enjoyed every moment.
              For now it not so enjoyable as it was but I kinda used to web-dev
              already.
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
            FontFamily="Merriweather"
            FontStyle="italic"
            Margin="25px 0 0 0"
          >
            skills:
          </Paragraph>

          <Skills>
            <Skills.Item>responsive web design;</Skills.Item>
            <Skills.Item>
              server & client communication;
            </Skills.Item>
            <Skills.Item>web performance optimization;</Skills.Item>
            <Skills.Item>
              javascript essentials - closures, hoisting, scopes;
            </Skills.Item>
            <Skills.Item>
              back-end development (wp/php, node.js/express);
            </Skills.Item>
            <Skills.Item>design database models;</Skills.Item>
            <Skills.Item>OOP, SOLID.</Skills.Item>
          </Skills>
          <Anim anim="shake" duration={1} delay={1} iterationCount="2">
            <Paragraph
              FontSize="1.5rem"
              FontFamily="Merriweather"
              FontStyle="italic"
              Margin="60px 0 10px 0"
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
