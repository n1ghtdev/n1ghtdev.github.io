import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.li`
  &:last-child {
    margin-right: 0;
  }
  &:after {
    content: '';
    display: inline-block;
    width: 2px;
    height: 2px;
    background: #8B8B8B;
    vertical-align: middle;
    margin: 0 10px;
  }
  &:last-child:after {
    display: none;
  }
`;

const A = styled(Link)`
  font-size: 0.875rem;
  color: ${({ active }) => active ? '#525252' : '#a6a6a6'};
  text-decoration: none;
  text-transform: uppercase;
`;

const Item = ({ children, to, active }) => (
  <Wrapper>
    <A to={to} active={active}>{children}</A>
  </Wrapper>
);

Item.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default Item;
