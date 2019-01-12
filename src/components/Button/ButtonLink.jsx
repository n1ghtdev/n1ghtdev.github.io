import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  ${({ Mod }) => Mod === 'simple' && `
    display: inline-block;
    border: 2px solid #fff;
    background: transparency;
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    padding: 8px 60px;
  `}
`;

const ButtonLink = ({ children, to, Mod }) => (
  <Wrapper Mod={Mod} to={to}>{children}</Wrapper>
);

ButtonLink.propTypes = {
  children: PropTypes.any,
  to: PropTypes.any,
  Mod: PropTypes.string,
};

export default ButtonLink;
