import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.li`
  cursor: pointer;
  padding-right: 15px;
  &:last-child {
    padding-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonLink = styled.a`

`;

const Button = ({ children, onClick, name }) => {
  return (
    <ButtonWrapper>
      <ButtonLink onClick={onClick} name={name}>{children}</ButtonLink>
    </ButtonWrapper>  
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default Button;

