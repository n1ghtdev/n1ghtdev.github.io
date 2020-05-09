import React from 'react';

import GithubIcon from '@components/assets/github';
import ExternalIcon from '@components/assets/external';

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
      <styles.Content>
        <styles.Date>{date}</styles.Date>
        <styles.Title>{title}</styles.Title>
        <styles.Description dangerouslySetInnerHTML={{ __html: description }} />
        <styles.Tools>
          {tools &&
            tools.map((tool) => <styles.Tool key={tool}>{tool}</styles.Tool>)}
        </styles.Tools>
      </styles.Content>
      <styles.LinkWrapper>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        )}
        {external && (
          <a href={external} target="_blank" rel="noopener noreferrer">
            <ExternalIcon />
          </a>
        )}
      </styles.LinkWrapper>
    </styles.Wrapper>
  );
};

export default Project;
