import React from 'react';
import styled from 'styled-components';
import ProjectModal from './ProjectModal';
import { useModal } from '../../../views/Modal';

type GalleryProps = {
  filter: string;
  year: string | number;
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

const Project = styled.article`
  width: 480px;
  height: 300px;
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }
`;

const Image = styled.img`
  border-radius: 5px;
  /* width: 100%;
  height: 100%; */
`;

const testData = [
  {
    id: 0,
    title: 'project 1',
    img: 'https://i.imgur.com/FqRFkkq.jpg',
    type: 'projects',
    year: '2019',
  },
  {
    id: 1,
    title: 'project 2',
    img: 'https://i.imgur.com/FqRFkkq.jpg',
    type: 'projects',
    year: '2019',
  },
  {
    id: 2,
    title: 'project 3',
    img: 'https://i.imgur.com/FqRFkkq.jpg',
    type: 'projects',
    year: '2019',
  },
  {
    id: 3,
    title: 'project 4',
    img: 'https://i.imgur.com/FqRFkkq.jpg',
    type: 'projects',
    year: '2019',
  },
  {
    id: 4,
    title: 'project 5',
    img: 'https://i.imgur.com/FqRFkkq.jpg',
    type: 'projects',
    year: '2018',
  },
  {
    id: 5,
    title: 'project 6',
    img: 'https://i.imgur.com/FqRFkkq.jpg',
    type: 'projects',
    year: '2018',
  },
  {
    id: 6,
    title: 'project 1',
    img: 'https://i.imgur.com/FqRFkkq.jpg',
    type: 'experiments',
    year: '2019',
  },
  {
    id: 7,
    title: 'project 1',
    img: 'https://i.imgur.com/FqRFkkq.jpg',
    type: 'experiments',
    year: '2017',
  },
  {
    id: 8,
    title: 'project 1',
    img: 'https://i.imgur.com/FqRFkkq.jpg',
    type: 'experiments',
    year: '2018',
  },
  {
    id: 9,
    title: 'project 1',
    img: 'https://i.imgur.com/FqRFkkq.jpg',
    type: 'projects',
    year: '2019',
  },
];

const Gallery = (props: GalleryProps) => {
  const { isOpen, openModal, closeModal } = useModal();
  const [currentProject, setCurrentProject] = React.useState<null | number>(
    null,
  );
  const filteredData = testData.filter(
    project => project.type === props.filter && project.year === props.year,
  );
  return (
    <Wrapper>
      {filteredData.map(project => (
        <Project
          key={project.id}
          onClick={() => {
            setCurrentProject(project.id);
            openModal();
          }}
        >
          <Image src={project.img} alt={project.title} />
        </Project>
      ))}
      {isOpen ? (
        <ProjectModal
          projectId={currentProject || 0}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      ) : null}
    </Wrapper>
  );
};

export default Gallery;
