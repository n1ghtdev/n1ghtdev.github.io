import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrolldownSVG from './ScrolldownSVG';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-bottom: 20px;
`;

const H3 = styled.h3`
  font-weight: 700;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, .75);
  text-transform: uppercase;
  padding-top: 5px;
`;

const ScrolldownHint = () => {
  return (
    <Wrapper>
      <ScrolldownSVG />
      <H3>latest projects</H3>
    </Wrapper>
  );
};

export default ScrolldownHint;

