import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.footer`
  background: #111019;
  color: #fff;
  border-top: 1px solid rgba(255,255,255, .1);
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
