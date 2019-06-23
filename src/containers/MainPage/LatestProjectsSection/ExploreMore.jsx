import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Span from '../../../components/Span';
import { device } from '../../../breakpoints';

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #001f31;
  height: 75px;
  border-radius: 3px;
  text-decoration: none;
  transition: opacity 0.25s;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

const StyledSpan = styled(Span).attrs(() => ({
  FontSize: '2rem',
  FontWeight: 'bold',
  Color: '#fff',
}))`
  @media ${device.mobile} {
    font-size: 1.5rem;
  }
`;

const ExploreItem = ({ to }) => (
  <Wrapper to={to}>
    <StyledSpan>explore other projects</StyledSpan>
  </Wrapper>
);

ExploreItem.propTypes = {
  to: PropTypes.string,
};

export default ExploreItem;
