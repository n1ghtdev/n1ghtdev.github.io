import React from 'react';
import styled from 'styled-components';

import FeaturedProject from '@components/featuredProject';
import Section from '@components/section';
import media from '@styles/media';

const Wrapper = styled.div`
  ${media.large`
    padding-top: 100px;
    padding-bottom: 100px;
  `}
`;

const Featured = ({ data }: { data: any }) => {
  return (
    <Section id="featured">
      <Wrapper>
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
      </Wrapper>
    </Section>
  );
};

export default Featured;
