import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  flex-wrap: wrap;
`;

Row.propTypes = {
  children: PropTypes.any,
};

export default Row;

