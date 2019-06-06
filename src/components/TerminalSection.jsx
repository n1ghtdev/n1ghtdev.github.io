import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SectionLine from './SectionLine';

const TerminalBackground = styled.section`
  position: relative;
  background-color: #11ec83;
  height: 650px;
  margin: 400px 30px 65px 0;
`;

const TerminalSection = ({ children }) => (
  <TerminalBackground>
    <SectionLine Width={5} Height={210} Color="#11EC83" />
    {children}
  </TerminalBackground>
);

TerminalSection.propTypes = {
  children: PropTypes.any,
};

export default TerminalSection;
