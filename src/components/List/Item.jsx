import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  cursor: pointer;
  padding-right: 15px;
  &:last-child {
    padding-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`;

Item.propTypes = {
  children: PropTypes.any,
};

export default Item;

