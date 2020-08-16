import React from 'react';
import Slider from 'react-slick';

import { Wrapper, Title, Subtitle, List, SliderArrow, Dots } from './style';
import Section from '@components/section';
import Project from './project';

import useAnimation from '@hooks/use-animation';
import { IProject } from '@typings/project';
import { breakpoints } from '@styles/media';

type Props = {
  projects: IProject[];
};

const SLICK_SETTINGS = {
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  appendDots: (dots: any) => <Dots>{dots}</Dots>,
  prevArrow: <SliderArrow>{'<'} prev</SliderArrow>,
  nextArrow: <SliderArrow>next {'>'}</SliderArrow>,
  responsive: [
    {
      breakpoint: breakpoints.large,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: breakpoints.small,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Projects = ({ projects }: Props) => {
  const ref = React.useRef(null);
  const listRef = React.useRef(null);
  const sliderRef = React.useRef<Slider | null>(null);

  const animationClass = 'projects-fade-in';
  const animationListClass = 'projects-list-fade-in';
  useAnimation(ref, animationClass);
  useAnimation(listRef, animationListClass);

  function renderProjects(projects: IProject[]) {
    return projects.map((el: any) => {
      const { frontmatter, id, html } = el.node;
      const { date, title, tech, github, external, poster } = frontmatter;

      return (
        <Project
          key={id}
          poster={poster}
          title={title}
          description={html}
          github={github}
          external={external}
          tools={tech}
          date={date}
        />
      );
    });
  }

  const sliderSettings = React.useMemo(() => SLICK_SETTINGS, []);

  return (
    <Section id="projects">
      <Wrapper ref={ref}>
        <Title className={animationClass}>Projects</Title>
        <Subtitle className={animationClass}>
          Includes work and side projects/experiments.
        </Subtitle>
        <List ref={listRef} className={animationListClass}>
          <Slider ref={sliderRef} {...sliderSettings}>
            {renderProjects(projects)}
          </Slider>
        </List>
      </Wrapper>
    </Section>
  );
};

export default Projects;
