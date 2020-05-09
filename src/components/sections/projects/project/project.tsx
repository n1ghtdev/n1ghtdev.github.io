import React from 'react';

import ProjectLinks from '@components/project-links';

import * as styles from './project.styles';

type ProjectProps = {
  title: string;
  description: string;
  github: string;
  external: string;
  tools: string[];
  date: string;
  className: string;
};

const Project = (props: ProjectProps) => {
  const {
    date,
    title,
    description,
    tools,
    github,
    external,
    className,
  } = props;

  return (
    <styles.Wrapper className={className}>
      <styles.Title>{title}</styles.Title>
      <ProjectLinks github={github} external={external} />
    </styles.Wrapper>
  );
};

export default Project;
