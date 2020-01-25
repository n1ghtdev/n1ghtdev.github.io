import React from 'react';
import styled from 'styled-components';
import FeaturedProject from '../featuredProject';
import media from '../../styles/media';

const Wrapper = styled.section`
  ${media.large`
    padding-top: 100px;
    padding-bottom: 100px;
  `}
`;

const Featured = ({ data }: { data: any }) => {
  return (
    <Wrapper>
      {data.map((el: any) => {
        const { frontmatter, id, rawMarkdownBody } = el.node;
        const { date, title, tech, github, external, poster } = frontmatter;

        return (
          <FeaturedProject
            key={id}
            title={title}
            description={rawMarkdownBody}
            github={github}
            external={external}
            tools={tech}
            date={date}
            img={poster.publicURL}
          />
        );
      })}
    </Wrapper>
  );
};

export default Featured;
