import React from 'react';
import styled from 'styled-components';
import FeaturedProject from '../featuredProject';
import Container from '../container';

const Wrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
`;

const StyledContainer = styled(Container)`
  max-width: 1000px;
`;

const Featured = ({ data }: { data: any }) => {
  return (
    <Wrapper>
      <StyledContainer>
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
      </StyledContainer>
    </Wrapper>
  );
};

export default Featured;
