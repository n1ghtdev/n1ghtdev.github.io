import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Span from '../Span';

const Wrapper = styled(Link)`
  display: block;
  background: #001f31;
  height: 250px;
  border-radius: 3px;
  text-decoration: none;
  padding-left: 20px;
  transition: opacity 0.25s;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

const ExploreItem = ({ to }) => (
  <Wrapper to={to}>
    <Span FontSize="4rem" FontWeight="bold" Color="#fff">
      explore other projects
    </Span>
  </Wrapper>
);

ExploreItem.propTypes = {
  to: PropTypes.string,
};

export default ExploreItem;
