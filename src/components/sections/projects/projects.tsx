import React from 'react';
import Slider from 'react-slick';

import Section from '@components/section';
import Project from './project';
import { Wrapper, Title, Subtitle, List, SliderArrow, Dots } from './style';
import { breakpoints } from '@styles/media';

import useInView from '@hooks/use-in-view';
import { IProject } from '@typings/project';

type Props = {
  projects: IProject[];
};

const Projects = ({ projects }: Props) => {
  const titleRef = React.useRef(null);
  const listRef = React.useRef(null);
  const sliderRef = React.useRef<Slider | null>(null);

  const titleInView = useInView(titleRef, { threshold: 1 }, true);
  const listInView = useInView(listRef, { threshold: 0.6 }, true);

  function renderProjects(projects: IProject[]) {
    return projects.map((el: any) => {
      const { frontmatter, id, html } = el.node;
      const { date, title, tech, github, external, poster } = frontmatter;

      return (
        <Project
          key={id}
          img={poster}
          title={title}
          description={html}
          github={github}
          external={external}
          tools={tech}
          date={date}
          className={listVisibleClass}
        />
      );
    });
  }

  const sliderSettings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    appendDots: (dots: any) => <Dots>{dots}</Dots>,
    prevArrow: <SliderArrow>{'<<'} prev</SliderArrow>,
    nextArrow: <SliderArrow>next {'>>'}</SliderArrow>,
    responsive: [
      {
        breakpoint: breakpoints.large,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: breakpoints.small,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const titleVisibleClass = titleInView ? 'visible' : '';
  const listVisibleClass = listInView ? 'visible' : '';

  return (
    <Section id="projects">
      <Wrapper>
        <Title className={titleVisibleClass} ref={titleRef}>
          Projects
        </Title>
        <Subtitle className={titleVisibleClass}>
          Includes work and side projects/experiments.
        </Subtitle>
        <List className={listVisibleClass} ref={listRef}>
          <Slider ref={sliderRef} {...sliderSettings}>
            {renderProjects(projects)}
          </Slider>
        </List>
      </Wrapper>
    </Section>
  );
};

export default Projects;
