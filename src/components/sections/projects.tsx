import React from 'react';
import styled from 'styled-components';
import Container from '../container';
import Project from '../project';

const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
`;
const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  color: ${({ theme }: { theme: any }) => theme.bright};
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
`;

const Projects = ({ data }: { data: any }) => {
  return (
    <Wrapper>
      <Container>
        <SectionTitle>Other projects</SectionTitle>
        <Grid>
          {data.map(el => {
            const { frontmatter, id, rawMarkdownBody } = el.node;
            const { date, title, tech, github, external } = frontmatter;

            return (
              <Project
                key={id}
                title={title}
                description={rawMarkdownBody}
                github={github}
                external={external}
                tools={tech}
                date={date}
              />
            );
          })}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Projects;
