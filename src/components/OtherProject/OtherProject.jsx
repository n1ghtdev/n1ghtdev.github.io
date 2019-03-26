import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tools from '../Tools';

const Wrapper = styled.article`
  z-index: 1;
  position: relative;
  min-height: 175px;
  display: flex;
  flex-flow: column nowrap;
  background: hsl(245, 38%, 16%);
  padding: 10px 20px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 2px 2px hsl(245, 40%, 10%);

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #923636;
    display: block;
    transform: translateX(-100%);
    transition: all .25s;
  }

  &:hover:after {
    transform: translateX(0);
  }
`;

const Shape = styled.div`
  position: absolute;
  top: 0;
  right: -15%;
  width: 70%;
  height: 100%;
  transform: skew(30deg);
  background: linear-gradient(to bottom, hsl(245, 36%, 18%), hsl(245, 38%, 16%));
`;

const Title = styled.h3`
  color: #fff;
  font-size: 2rem;
  font-family: 'Lobster Two', cursive;
  font-weight: normal;
  z-index: 2;
  margin-bottom: 5px;
`;

const Description = styled.p`
  color: #fff;
  margin: 5px 0 10px 0;
  min-height: 50px;
  line-height: 1.5;
  flex: 1;
  z-index: 2;
`;

const OtherProject = ({ title, description, tools }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Shape />
    <Description>{description}</Description>
    <Tools tools={tools} />
  </Wrapper>
);

OtherProject.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tools: PropTypes.array,
};

export default OtherProject;
