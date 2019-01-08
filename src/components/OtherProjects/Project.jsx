import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.article`
  height: 150px;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: inherit;
  object-fit: cover;

  ${Wrapper}:hover & {
    filter: blur(5px);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .35s;
  transform: translateX(100%);
  background: rgba(23, 35, 58, .75);
  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Header = styled.header`
  color: #fff;
  text-align: center;
`;

const Title = styled.h3`
  font-weight: 300;
  font-size: 2rem;
`;

const Tools = styled.ul`
  display: inline-flex;
`;

const Tool = styled.li`
  display: inline;
  text-transform: uppercase;
  font-size: 0.875rem;
  &:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
    margin-right: 5px;
    background: #fff;
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }
  &:last-child:after {
    display: none;
  }
`;

const Projects = ({ id, title, tools, description, imgSrc, imgAlt }) => {
  return (
    <Wrapper>
      <Image src={imgSrc} alt={imgAlt} />
      <Overlay>
        <Header>
          <Title>{title}</Title>
          <Tools>
            { tools.map((tool, i) => (
              <Tool key={i}>{tool}</Tool>
            )) }
          </Tools>
        </Header>
      </Overlay>
    </Wrapper>
  );
};

Projects.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  tools: PropTypes.array,
  description: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default Projects;
