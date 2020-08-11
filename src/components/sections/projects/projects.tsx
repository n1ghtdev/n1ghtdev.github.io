import React from 'react';
import Slider from 'react-slick';

import Section from '@components/section';
import Project from './project';
import { Wrapper, Title, Subtitle, List, SliderArrow, Dots } from './style';
import { breakpoints } from '@styles/media';
import { fadeIn } from '@utils/gsap-animations';

import useIntersection from '@hooks/use-intersection';
import { IProject } from '@typings/project';

type Props = {
  projects: IProject[];
};

const Projects = ({ projects }: Props) => {
  const ref = React.useRef(null);
  const listRef = React.useRef(null);
  const sliderRef = React.useRef<Slider | null>(null);

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  });

  const intersectionList = useIntersection(listRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  });

  React.useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      fadeIn('.p-header-fadeIn');
    }
  }, [intersection]);

  React.useEffect(() => {
    if (intersectionList && intersectionList.isIntersecting) {
      fadeIn('.fadeIn');
    }
  }, [intersectionList]);

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
    prevArrow: <SliderArrow>{'<'} prev</SliderArrow>,
    nextArrow: <SliderArrow>next {'>'}</SliderArrow>,
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

  return (
    <Section id="projects">
      <Wrapper ref={ref}>
        <Title className="p-header-fadeIn">Projects</Title>
        <Subtitle className="p-header-fadeIn">
          Includes work and side projects/experiments.
        </Subtitle>
        <List ref={listRef} className="fadeIn">
          <Slider ref={sliderRef} {...sliderSettings}>
            {renderProjects(projects)}
          </Slider>
        </List>
      </Wrapper>
    </Section>
  );
};

export default Projects;
