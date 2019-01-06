import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Project from './Project';

const Wrapper = styled.main`
 padding-top: 125px;
`;

const LatestProjects = ({ children }) => {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  );
};

LatestProjects.propTypes = {
  children: PropTypes.any,
};

export default LatestProjects;
