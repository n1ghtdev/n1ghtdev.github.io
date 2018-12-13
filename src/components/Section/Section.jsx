import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.div`
  height: ${({ Height }) => Height};  
  background: ${({ Background }) => Background};
  background-position: center bottom;
`;

Section.propTypes = {
  children: PropTypes.any,
  Height: PropTypes.string,
  Background: PropTypes.string,
};

Section.defaultProps = {
  Height: 'auto',
  Background: 'transparent',
}

export default Section;

