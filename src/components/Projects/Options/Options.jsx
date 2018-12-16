import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Options = styled.ul`
  display: inline-flex;
  list-style-type: none;
`;

Options.propTypes = {
  children: PropTypes.any,
};

export default Options;
