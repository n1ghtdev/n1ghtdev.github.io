import React from 'react';
import styled from 'styled-components';
import Container from '../container';
import Project from '../project';
import useInView from '../../hooks/useInView';

import { fadeInUp } from '../../styles/animations';

const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
`;
const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  color: ${({ theme }: { theme: any }) => theme.bright};

  animation: ${fadeInUp} 250ms forwards linear;
  animation-delay: 250ms;
  opacity: 0;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 15px;
`;

const Projects = ({ data }: { data: any }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });

  return (
    <Wrapper ref={ref}>
      <Container>
        {isInView ? (
          <>
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
          </>
        ) : null}
      </Container>
    </Wrapper>
  );
};

export default Projects;
