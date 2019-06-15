import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../../../breakpoints';

const Wrapper = styled.section`
  position: relative;
  background-color: #11ec83;
  height: 650px;
  margin: 400px 30px 15px 0;
  @media ${device.mobile} {
    margin: 200px 0 15px 0;
    height: 800px;
    background-color: transparent;
  }
  @media ${device.tablet} {
    margin: 400px 0 0 0;
    height: 1050px;
  }
`;

const DecorationLine = styled.div`
  position: absolute;
  left: 50%;
  top: -210px;
  height: 210px;
  width: 5px;
  transform: translateX(-50%);
  background-color: #11ec83;
  @media ${device.mobile} {
    display: none;
  }
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
