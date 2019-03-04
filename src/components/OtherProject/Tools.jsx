import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
  list-style-type: none;
  display: inline-flex;
`;

const Item = styled.li`
  color: #923636;
  font-size: 0.875rem;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  &:after {
    content: '';
    background: #923636;
    width: 3px;
    height: 3px;
    display: block;
    margin: 0 7px;
  }
  &:last-child:after {
    display: none;
  }
`;

const Tools = ({ tools }) => (
  <Wrapper>
    { tools.map(tool => <Item key={tool.id}>{tool.title}</Item>) }
  </Wrapper>
);

Tools.propTypes = {
  tools: PropTypes.array.isRequired,
};

export default Tools;
