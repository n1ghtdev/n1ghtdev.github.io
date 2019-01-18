import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './Item';

const List = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  & > li:nth-child(even) {
    padding-top: 40px;
  }
`;

const Skills = ({ skills }) => (
  <List>
    { skills.map((skill) => (
      <Item
        key={skill.id}
        title={skill.title}
        description={skill.description}
      />
    )) }
  </List>
);

Skills.propTypes = {
  skills: PropTypes.array,
};

export default Skills;
