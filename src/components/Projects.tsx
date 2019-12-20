import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Project from './Project';
import useProjects from '../hooks/useProjects';

type ProjectsProps = {
  filter: string;
  year: string;
};

type TProject = {
  id: string | number;
  title: string;
  img: string;
  type: string;
  year: string;
};

const Wrapper = styled.div`
  max-width: 1112px;
  width: 100%;
  margin-right: -20px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-row-gap: 40px;
  justify-items: center;
`;

const Projects = (props: ProjectsProps) => {
  const location = useLocation();
  const { projects, loading, error } = useProjects();

  if (loading) return <Wrapper />;

  const filteredProjects: any = projects.filter(
    (project: any) =>
      project.type === props.filter && project.year === props.year,
  );
  return (
    <Wrapper>
      {filteredProjects.map((project: any) => (
        <Link
          key={project.id}
          to={{
            pathname: `/projects/${project.id}`,
            state: { modal: location },
          }}
        >
          <Project title={project.title} img={project.poster} />
        </Link>
      ))}
    </Wrapper>
  );
};

export default Projects;
