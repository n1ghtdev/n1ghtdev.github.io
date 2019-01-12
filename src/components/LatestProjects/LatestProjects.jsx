import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.main`
  padding-bottom: 200px;
`;

const LatestProjects = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
);

LatestProjects.propTypes = {
  children: PropTypes.any,
};

export default LatestProjects;
