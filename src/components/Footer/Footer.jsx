import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.footer`
  position: relative;
  z-index: 3;
  background: hsl(250, 25%, 5%);
  color: #fff;
  /* border-top: 1px solid #ddd; */
`;

const Footer = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
