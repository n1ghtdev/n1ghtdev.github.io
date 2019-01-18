import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  width: 45px;
  margin-left: auto;
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
