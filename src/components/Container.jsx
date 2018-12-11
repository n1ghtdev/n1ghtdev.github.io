import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DivContainer = styled.div`

`;

const Container = ({ children }) => (
  <DivContainer>{ children }</DivContainer>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
