import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = styled.div`
  height: inherit;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  z-index: ${({relative}) => relative ? '1' : 'auto'};
  position: ${({relative}) => relative ? 'relative' : 'static'};

  ${({flex}) => flex && `
    display: flex;
    flex-flow: column nowrap;
  `}

  @media (min-width: 1200px) {
    max-width: 1170px;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    max-width: 970px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    max-width: 750px;
  }
  @media (max-width: 768px) {
    max-width: auto;
  }
`;

Grid.propTypes = {
  children: PropTypes.any,
  relative: PropTypes.bool,
  flex: PropTypes.bool,
};

export default Grid;

