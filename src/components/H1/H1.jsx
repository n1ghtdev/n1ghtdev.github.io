import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1Wrapper = styled.h1`
  color: ${(props) => props.color || 'black'};
`;

const H1 = ({ color, children }) => (
  <H1Wrapper color={color}>{ children }</H1Wrapper>
);

H1.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any,
};

export default H1;
