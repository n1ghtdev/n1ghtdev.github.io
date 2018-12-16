import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonLink = styled.a`

`;

const Button = ({ children, onClick, name }) => {
  return (
    <ButtonLink onClick={onClick} name={name}>{children}</ButtonLink>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default Button;

