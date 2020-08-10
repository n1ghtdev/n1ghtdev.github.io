import React from 'react';

import {
  Wrapper,
  Poster,
  Content,
  Header,
  Links,
  Title,
  Description,
  Tags,
  Tag,
} from './style';
import GithubIcon from '@components/assets/github';
import ExternalIcon from '@components/assets/external';

type Props = {
  title: string;
  img: any;
  description: string;
  github: string;
  external: string;
  tools: string[];
  date: string;
};

const Project = (props: Props) => {
  const { title, description, tools, github, external } = props;

  return (
    <Wrapper>
      <Poster src="https://via.placeholder.com/540x320" alt={title} />
      <Content>
        <Header>
          <Title>{title}</Title>
          <Links>
            <a
              href={github || '#'}
              className={!github ? 'disabled' : ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              href={external || '#'}
              className={!external ? 'disabled' : ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalIcon />
            </a>
          </Links>
        </Header>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <Tags>
          {tools && tools.length > 0
            ? tools.map((tool: string) => <Tag key={tool}>{tool}</Tag>)
            : null}
        </Tags>
      </Content>
    </Wrapper>
  );
};

export default Project;
