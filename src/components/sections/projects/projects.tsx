import React from 'react';

import Container from '@components/container';
import Section from '@components/section';
import Project from './project';

import useInView from '@hooks/useInView';

import * as styles from './projects.styles';

const Projects = ({ data }: { data: any }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.15 }, true);

  const visibleClassname = isInView ? 'visible' : '';

  return (
    <Section id="projects">
      <styles.Wrapper ref={ref}>
        <Container>
          <styles.SectionTitle className={visibleClassname}>
            Other projects
          </styles.SectionTitle>
          <styles.List>
            {data.map((el: any) => {
              const { frontmatter, id, html } = el.node;
              const { date, title, tech, github, external } = frontmatter;

              return (
                <Project
                  key={id}
                  title={title}
                  description={html}
                  github={github}
                  external={external}
                  tools={tech}
                  date={date}
                  className={visibleClassname}
                />
              );
            })}
          </styles.List>
        </Container>
      </styles.Wrapper>
    </Section>
  );
};

export default Projects;
