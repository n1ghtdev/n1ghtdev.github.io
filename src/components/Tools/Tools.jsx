import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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

const Tool = styled.li`
  position: relative;
  z-index: 2;
  width: 120px;
  height: 30px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #242E39;
  font-weight: bold;
  font-size: 0.875rem;
  color: #fff;
  text-transform: uppercase;
  transition: all .25s;
  cursor: help;

  ${({ parent }) => parent ? css`
    &:hover {
      cursor: default;
    }
    background: ${({ bgColor }) => bgColor};
  ` : css`
      &:hover {
        background: #2F3C4C;
      }
  `}
`;

const Tools = ({ tools }) => (
  <Wrapper>
    { tools.map((tool, i) => (
      <List>
        <Tool key={i} bgColor={tool.bgColor} parent>
          {tool.title}
        </Tool>
        { tool.children.map((child, i) => (
          <Tool key={i}>
            {child}
          </Tool>
        )) }
      </List>
    )) }
  </Wrapper>
);

Tools.propTypes = {
  tools: PropTypes.array,
};

export default Tools;
