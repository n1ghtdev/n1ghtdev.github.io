import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: inline-flex;
  list-style-type: none;
`;

const List = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

List.propTypes = {
  children: PropTypes.any,
};

export default List;
