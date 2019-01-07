import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.article`
  height: 150px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: inherit;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Projects = ({ id, title, description, imgSrc, imgAlt }) => {
  return (
    <Wrapper>
      <Image src={imgSrc} alt={imgAlt} />
      <Overlay>
        <h3>{title}</h3>
        <p>{description}</p>
      </Overlay>
    </Wrapper>
  );
};

Projects.propTypes = {
  children: PropTypes.any,
};

export default Projects;
