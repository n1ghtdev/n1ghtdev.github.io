import React from 'react';

import {
  Wrapper,
  PosterWrapper,
  PosterHover,
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
  description: string;
  poster: any;
  github: string;
  external: string;
  tools: string[];
  date: string;
};

const Project = (props: Props) => {
  const { title, description, poster, tools, github, external } = props;
  const posterImg = poster?.childImageSharp?.fluid;

  return (
    <Wrapper>
      <PosterWrapper href={external || github}>
        {posterImg ? (
          <Poster fluid={posterImg} alt={title} />
        ) : (
          <Poster
            as="img"
            src="https://via.placeholder.com/540x320"
            alt={title}
          />
        )}
        <PosterHover>
          <ExternalIcon />
        </PosterHover>
      </PosterWrapper>
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
