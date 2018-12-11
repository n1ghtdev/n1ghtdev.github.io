import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`

`;

const Wrapper = ({ children }) => {
  return (
    <StyledWrapper>{ children }</StyledWrapper>  
  );
};

Wrapper.propTypes = {
  children: PropTypes.any,
};

export default Wrapper;
