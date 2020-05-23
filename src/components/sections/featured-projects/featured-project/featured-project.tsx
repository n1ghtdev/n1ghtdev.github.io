import React from 'react';

import useInView from '@hooks/use-in-view';
import ProjectLinks from '@components/project-links';
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
        <styles.InnerContent>
          <styles.Tools>
            {tools?.map((tool) => (
              <styles.Tool key={tool}>{tool}</styles.Tool>
            ))}
          </styles.Tools>
          <styles.Description
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <ProjectLinks github={github} external={external} />
        </styles.InnerContent>
      </styles.Content>
    </styles.Wrapper>
  );
};

export default FeaturedProject;
