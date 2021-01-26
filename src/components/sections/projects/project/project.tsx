import React from 'react';

import Img from 'gatsby-image';
import {
  ProjectBase,
  ProjectLink,
  ProjectHover,
  ProjectContent,
  ProjectHeader,
  ProjectLinks,
  ProjectDescr,
  ProjectTags,
  ProjectTag,
} from './style';
import GithubIcon from '@components/assets/github';
import ExternalIcon from '@components/assets/external';
import { Placeholder } from '@components/placeholder';

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
    <ProjectBase>
      <ProjectLink href={external || github}>
        {posterImg ? (
          <Img className="gatsby-img" fluid={posterImg} alt={title} />
        ) : (
          <Placeholder>{title}</Placeholder>
        )}
        <ProjectHover>
          <ExternalIcon />
        </ProjectHover>
      </ProjectLink>
      <ProjectContent>
        <ProjectHeader>
          <h3>{title}</h3>
          <ProjectLinks>
            <a
              href={github || '#'}
              title="github"
              className={!github ? 'disabled' : ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              href={external || '#'}
              title="live website"
              className={!external ? 'disabled' : ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalIcon />
            </a>
          </ProjectLinks>
        </ProjectHeader>
        <ProjectDescr dangerouslySetInnerHTML={{ __html: description }} />
        <ProjectTags>
          {tools?.length > 0
            ? tools.map((tool: string) => (
                <ProjectTag key={tool}>{tool}</ProjectTag>
              ))
            : null}
        </ProjectTags>
      </ProjectContent>
    </ProjectBase>
  );
};

export default Project;
