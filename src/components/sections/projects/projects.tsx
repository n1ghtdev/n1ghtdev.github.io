import React from 'react';

import { Wrapper, Title, Subtitle, List } from './style';
import Section from '@components/section';
import Project from './project';

import useAnimation from '@hooks/use-animation';
import { IProject } from '@typings/project';
import { breakpoints } from '@styles/media';

type Props = {
  projects: IProject[];
};

const Projects = ({ projects }: Props) => {
  const ref = React.useRef(null);
  const listRef = React.useRef(null);

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

  return (
    <Section id="projects">
      <Wrapper ref={ref}>
        <Title className={animationClass}>Projects</Title>
        <Subtitle className={animationClass}>
          Includes work and side projects/experiments.
        </Subtitle>
        <List ref={listRef} className={animationListClass}>
          {renderProjects(projects)}
        </List>
      </Wrapper>
    </Section>
  );
};

export default Projects;
