import React from 'react';

import useInView from '@hooks/useInView';

import GithubIcon from '@components/assets/github';
import ExternalIcon from '@components/assets/external';

import * as styles from './featured-project.styles';

type Props = {
  img: any;
  title: string;
  description: string;
  github: string;
  external: string;
  tools: string[];
  date: string;
};

const FeaturedProject = (props: Props) => {
  const { title, description, img, tools, github, external } = props;
  const { fluid: fluidImage } = img.childImageSharp;

  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 }, true);

  return (
    <styles.Wrapper ref={ref} className={isInView ? 'visible' : ''}>
      <styles.ImageWrapper>
        <styles.Image fluid={fluidImage} />
      </styles.ImageWrapper>
      <styles.Content>
        <styles.Title>{title}</styles.Title>
        <styles.Tools>
          {tools?.map((tool) => (
            <styles.Tool>{tool}</styles.Tool>
          ))}
        </styles.Tools>
        <styles.Description dangerouslySetInnerHTML={{ __html: description }} />
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
      </styles.Content>
    </styles.Wrapper>
  );
};

export default FeaturedProject;
