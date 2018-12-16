import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  display: inline-flex;
  list-style-type: none;
`;

List.propTypes = {
  children: PropTypes.any,
};

export default List;
