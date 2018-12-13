import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
`;

Row.propTypes = {
  children: PropTypes.any,
  justify: PropTypes.string,
  alignItems: PropTypes.string,
};

Row.defaultProps = {
  alignItems: 'flex-start',
  justify: 'flex-start',
};

export default Row;

