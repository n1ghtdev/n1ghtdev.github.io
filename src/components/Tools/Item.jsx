import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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

const Item = ({ children, bgColor, parent }) => (
  <Tool bgColor={bgColor} parent={parent}>
    {children}
  </Tool>
);

Item.propTypes = {
  children: PropTypes.any,
  bgColor: PropTypes.string,
  parent: PropTypes.bool,
};

Item.defaultProps = {
  bgColor: '#242E39',
  parent: false,
};

export default Item;
