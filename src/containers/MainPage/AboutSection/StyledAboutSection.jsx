import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../../../breakpoints';

const Wrapper = styled.section`
  color: ${({ theme }) => theme.altSecondaryColor};
  position: relative;
  height: auto;
  margin-top: 75px;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 5px;
  padding-bottom: 2rem;
  @media ${device.desktop} {
    padding-top: 2rem;
    padding-bottom: 6rem;
  }
`;

const DecorationLine = styled.div`
  position: absolute;
  left: 50%;
  top: -35px;
  height: 70px;
  width: 2px;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.secondaryColor};
`;

const StyledAboutSection = ({ children }) => (
  <Wrapper>
    <DecorationLine />
    {children}
  </Wrapper>
);

StyledAboutSection.propTypes = {
  children: PropTypes.any,
};

export default StyledAboutSection;
