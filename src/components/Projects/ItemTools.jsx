import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 40px;
  background: rgba(255,255,255, .9);
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;

const Item = styled.li`
  color: #595959;
  font-size: 0.75rem;
  text-transform: uppercase;

  &:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 3px;
    height: 3px;
    background: #b2b2b2;
    margin: 0 7px;
  }
  &:last-child:after {
    display: none;
  }
`;

const ItemTools = ({ tools }) => (
  <List>
    { tools.map((tool) => (
      <Item key={tool.id}>
        { tool.title }
      </Item>
    )) }
  </List>
);

ItemTools.propTypes = {
  tools: PropTypes.array,
};

export default ItemTools;
