import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Span from '../../../components/Span';
import { device } from '../../../breakpoints';

const Wrapper = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textColor};
  height: 75px;
  border-radius: 3px;
  text-decoration: none;
  transition: opacity 0.25s;
  opacity: 0.5;
  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 3px;
  }
  &:hover:after {
    background: transparent;
  }
  &:hover:before {
    opacity: 1;
  }
  &:hover {
    background: transparent;
  }
  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  /* &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.primaryColor};
    background: ${({ theme }) => theme.secondaryColor};
  } */
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
    <StyledSpan>explore more</StyledSpan>
  </Wrapper>
);

ExploreItem.propTypes = {
  to: PropTypes.string,
};

export default ExploreItem;
