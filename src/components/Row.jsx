import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
`;

Row.propTypes = {
  children: PropTypes.any,
  justify: PropTypes.string,
  alignItems: PropTypes.string,
};

export default Row;

