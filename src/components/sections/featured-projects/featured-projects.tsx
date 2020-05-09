import React from 'react';

import Section from '@components/section';
import FeaturedProject from './featured-project';

import * as styles from './featured-projects.styles';

const FeaturedProjects = ({ data }: { data: any }) => {
  return (
    <Section id="featured">
      <styles.Wrapper>
        {data.map((el: any) => {
          const { frontmatter, id, html } = el.node;
          const { date, title, tech, github, external, poster } = frontmatter;

          return (
            <FeaturedProject
              key={id}
              title={title}
              description={html}
              github={github}
              external={external}
              tools={tech}
              date={date}
              img={poster}
            />
          );
        })}
      </styles.Wrapper>
    </Section>
  );
};

export default FeaturedProjects;
