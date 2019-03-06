import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from '../A';

const Wrapper = styled.li`
  display: inline-block;
  padding-right: 20px;

  &:last-child {
    padding-right: 0;
  }
`;

const Link = styled.a`
  color: #fff;
  font-size: 2rem;
  transition: all .25s;

  &:hover {
    border-color: #435365;
  }
`;

const Item = (props) => (
  <Wrapper>
    <A as={Link} {...props}>{props.children}</A>
  </Wrapper>
);

Item.propTypes = {
  children: PropTypes.node,
};

export default Item;
