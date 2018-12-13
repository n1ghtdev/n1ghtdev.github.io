import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H1 } from '../Headings';

const LogotypeWrapper = styled.div`
  display: flex;
  font-size: 2rem;
  color: #fff;
`;

const Logotype = ({ children }) => {
  return (
    <LogotypeWrapper>
      <H1 Color="#fff">{'{ nickew }'}</H1>  
    </LogotypeWrapper>
  );
};

Logotype.propTypes = {
  children: PropTypes.any,
};

export default Logotype;

