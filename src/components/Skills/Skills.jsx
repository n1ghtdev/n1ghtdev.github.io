import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Skill = styled.article`
  padding-top: 20px;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: bold;

  &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 3px;
    margin-right: 10px;
    width: 6px;
    height: 6px;
    background: #5C7A9E;
    border-radius: 50%;
  }
`;

const Description = styled.p`
  color: #fff;
`;

const Skills = ({ skills }) => (
  <List>
    { skills.map((skill, i) => (
      <li key={i}>
        <Skill>
          <Title>{skill.title}</Title>
          <Description>{skill.description}</Description>
        </Skill>
      </li>
    )) }
  </List>
);

Skills.propTypes = {
  skills: PropTypes.array,
};

export default Skills;
