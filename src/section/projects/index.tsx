import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { ProjectsCard } from './components/card';
import { SPACE_M } from '@styles/theme';
import media from '@styles/media';

type Project = {
  node: {
    frontmatter: {
      date: string;
      external: string;
      github: string;
      title: string;
      tech: string[];
      poster?: {
        childImageSharp: {
          fluid: any;
        };
      };
    };
    id: string;
    html: string;
  };
};

const query = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      edges {
        node {
          ...ProjectFragment
        }
      }
    }
  }
`;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${SPACE_M};
  margin-bottom: 10rem;

  ${media.medium`
    grid-template-columns: 1fr 1fr;
  `}
`;

const SectionProjects: FC = () => {
  const data = useStaticQuery(query);

  const { edges: projects } = data.projects;

  return (
    <Wrapper>
      {projects.map(({ node }: Project) => {
        const { frontmatter: project } = node;

        return (
          <ProjectsCard
            descr={node.html}
            date={project.date}
            key={node.id}
            external={project.external}
            github={project.github}
            title={project.title}
            tech={project.tech}
            poster={project.poster?.childImageSharp.fluid}
          />
        );
      })}
    </Wrapper>
  );
};

export { SectionProjects };
