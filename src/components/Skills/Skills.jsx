import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVGScreen from './SVGScreen';

const List = styled.ul``;

const Skill = styled.article``;

const Title = styled.h3``;

const Description = styled.p``;

const Skills = ({ skills }) => {
  return (
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
};

Skills.propTypes = {
  children: PropTypes.any,
};

export default Skills;

