import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  height: ${({ Height }) => typeof Height === 'string' ? Height : `${Height}px`};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
`;

Row.propTypes = {
  children: PropTypes.any,
  justify: PropTypes.string,
  alignItems: PropTypes.string,
  Height: PropTypes.any,
};

Row.defaultProps = {
  justify: 'flex-start',
  alignItems: 'flex-start',
  Height: 'auto',
};

export default Row;

