import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { ProjectsCard } from './components/card';
import { version } from 'process';

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
  display: flex;
`;

const SectionProjects: FC = () => {
  const data = useStaticQuery(query);

  const { edges: projects } = data.projects;

  console.log(projects);

  return (
    <Wrapper>
      {projects.map(({ node }: any) => {
        const { frontmatter: project } = node;
        console.log(project);

        return (
          <ProjectsCard
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
