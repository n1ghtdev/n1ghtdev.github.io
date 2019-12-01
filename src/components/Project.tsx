import React from 'react';
import styled from 'styled-components';

type ProjectProps = {
  onClick: () => void;
  img: string;
  title: string;
};

const Wrapper = styled.article`
  width: 480px;
  height: 300px;
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }
`;
const Image = styled.img`
  border-radius: 5px;
  width: 100%;
  object-fit: cover;
  max-height: 100%;
`;

const Project = (props: ProjectProps) => {
  return (
    <Wrapper onClick={props.onClick}>
      <Image src={props.img} alt={props.title} />
    </Wrapper>
  );
};

export default Project;
