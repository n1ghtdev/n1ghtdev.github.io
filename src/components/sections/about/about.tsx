import React from 'react';
import { Wrapper, Title, Illustration, Content } from './style';
import IllustrationSVG from '@components/assets/illustration';

type Props = {};

function About(props: Props) {
  return (
    <Wrapper>
      <Title>About me</Title>
      <Illustration>
        <IllustrationSVG />
      </Illustration>
      <Content>
        <p>
          My name is Nikita, I’m self-taught front-end developer with Software
          Engineering background.
        </p>
        <p>
          For my first 2 years in university I learned C# OOP, which was great
          experience for me but still not what I wanted to do.
        </p>
        <p>
          That’s when I stared to learn front-end development throughtout
          courses, articles and etc. One of the most impactful free courses I
          found for myself as a web beginner was FreecodeCamp which was easy to
          follow.
        </p>
        <p>
          Today most of the time I’m working on freelance with HTML/CSS/JS and
          PHP (Wordpress, OpenCart). In free time I’m enjoying my time with
          React side-projects development.
        </p>
        <p>I’m based in Kyiv, Ukraine and looking for a REACT FRONT-END JOB.</p>
      </Content>
    </Wrapper>
  );
}

export default About;
