import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  background-color: #11ec83;
  height: 650px;
  margin: 400px 30px 30px 0;
`;

const DecorationLine = styled.div`
  position: absolute;
  left: 50%;
  top: -210px;
  height: 210px;
  width: 5px;
  transform: translateX(-50%);
  background-color: #11ec83;
`;

const StyledToolsSection = ({ children }) => (
  <Wrapper>
    <DecorationLine />
    {children}
  </Wrapper>
);

StyledToolsSection.propTypes = {
  children: PropTypes.any,
};

export default StyledToolsSection;
