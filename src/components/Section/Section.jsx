import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  height: ${(props) => props.Height || 'auto' };  
  background: ${(props) => props.Background || 'white' };
  background-position: center bottom;
`;

const Section = ({ children, Height, Background }) => {
  return (
    <SectionWrapper Height={Height} Background={Background}>
       { children }
    </SectionWrapper>
  );
};

Section.propTypes = {
  children: PropTypes.any,
  Height: PropTypes.string,
  Background: PropTypes.string,
};

export default Section;

