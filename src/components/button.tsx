import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import theme from '../styles/theme';
import { hexToRgba } from '../utils/hexToRgba';

interface ButtonProps {
  href?: string;
  type?: 'button' | 'submit';
  onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
  theme?: any;
  children: any;
}

const ButtonBaseStyles = styled.a`
  display: block;
  max-width: 158px;
  text-align: center;
  padding: 18px 0;
  text-decoration: none;
  flex-grow: 1;
`;

const StyledButton = styled(ButtonBaseStyles)`
  color: ${(props: ButtonProps) => theme.bright};
  background: none;
  border: 1px solid ${(props: ButtonProps) => theme.primary};
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  transition: background-color 250ms ease-in;
  &:hover {
    background-color: ${(props: ButtonProps) => hexToRgba(theme.primary, '.2')};
  }
`;

const Button = (props: ButtonProps) => {
  if (props.href) {
    return (
      <StyledButton as={Link} to={props.href}>
        {props.children}
      </StyledButton>
    );
  }
  return (
    <StyledButton onClick={props.onClick} type={props.type || 'button'}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
