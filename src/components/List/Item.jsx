import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

const A = styled(Link)`
  font-size: 0.875rem;
  color: #0e0e0e;
  text-decoration: none;
  text-transform: uppercase;
`;

const Item = ({ children, to }) => (
  <Wrapper>
    <A to={to}>{children}</A>
  </Wrapper>
);

Item.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string.isRequired,
};

export default Item;
