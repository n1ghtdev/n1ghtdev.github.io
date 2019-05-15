import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Col from '../Col';

const Wrapper = styled.header`
  order: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Header = ({ children }) => (
  <Wrapper as={Col} lg={3} textAlign="center">
    {children}
  </Wrapper>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
