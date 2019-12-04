import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import useModal from '../hooks/useModal';
import useProjects from '../hooks/useProjects';

const ProjectModal = React.lazy(() => import('./ProjectModal'));

type ProjectsProps = {
  projects: Array<object>;
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
  const { isOpen, openModal, closeModal } = useModal();
  const [currentProject, setCurrentProject] = React.useState<number>(0);
  const { data, loading, error } = useProjects('year', props.year);
  const filteredProjects = props.projects.filter(
    (project: any) =>
      project.type === props.filter && project.year === props.year,
  );
  console.log(data);
  return (
    <Wrapper>
      {filteredProjects.map((project: any) => (
        <Project
          key={project.id}
          onClick={() => {
            setCurrentProject(project.id);
            openModal();
          }}
          title={project.title}
          img={project.img}
        />
      ))}
      {isOpen ? (
        <React.Suspense fallback={<div>LOADING...</div>}>
          <ProjectModal
            projectId={currentProject}
            isOpen={isOpen}
            closeModal={closeModal}
          />
        </React.Suspense>
      ) : null}
    </Wrapper>
  );
};

export default Projects;
