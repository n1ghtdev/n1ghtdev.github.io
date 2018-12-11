import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container.jsx';

const HeaderWrapper = styled.div`

`;

const Header = ({ children }) => (
  <HeaderWrapper>
    <Container>
      { children }
    </Container>
  </HeaderWrapper>
);

Header.propTypes = {

};

export default Header;
