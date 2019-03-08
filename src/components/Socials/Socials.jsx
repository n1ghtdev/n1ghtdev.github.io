import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  display: inline;
  white-space: nowrap;
`;

const Socials = ({ children }) => (
  <List>
    {children}
  </List>
);

Socials.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Socials;
