import React from 'react';

import ProjectLinks from '@components/project-links';
import * as styles from './project.styles';

type Props = {
  title: string;
  img: any;
  description: string;
  github: string;
  external: string;
  tools: string[];
  date: string;
  className: string;
};

const Project = (props: Props) => {
  const { title, description, tools, github, external, className } = props;

  return (
    <styles.Wrapper className={className}>
      <div>
        <styles.Header>
          <styles.Title>{title}</styles.Title>
          <ProjectLinks github={github} external={external} />
        </styles.Header>
        <styles.Description dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <styles.Tags>
        {tools && tools.length > 0
          ? tools.map((tool: string) => (
              <styles.Tag key={tool}>{tool}</styles.Tag>
            ))
          : null}
      </styles.Tags>
    </styles.Wrapper>
  );
};

export default Project;
