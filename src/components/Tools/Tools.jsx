/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding-top: 30px;
`;

const List = styled.ul`
  margin-right: 40px;
  position: relative;

  &:after {
    content: '';
    z-index: 1;
    display: block;
    position: absolute;
    left: 50%;
    top: 30px;
    border: 1px dashed #354659;
    width: 1px;
    height: calc(100% - 30px);
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Tools = ({ tools }) => (
  <Wrapper>
    { tools.map((tool, i) => (
      <List key={i}>
        <Item bgColor={tool.bgColor} parent>
          {tool.title}
        </Item>
        { tool.children.map((child, ii) => (
          <Item key={ii}>
            {child}
          </Item>
        )) }
      </List>
    )) }
  </Wrapper>
);

Tools.propTypes = {
  tools: PropTypes.array,
};

export default Tools;
