import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  height: 100vh;
  background: linear-gradient(180deg, #030E1C 0%, #0D1116 100%);
`;

Header.propTypes = {
  onMouseMove: PropTypes.func,
};

export default Header;

