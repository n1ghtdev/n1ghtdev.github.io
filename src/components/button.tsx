import React from 'react';
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
  display: inline-block;
  text-align: center;
  padding: 12px 16px;
  text-decoration: none;
`;

const StyledButton = styled(ButtonBaseStyles)`
  color: ${(props: ButtonProps) => theme.bright};
  letter-spacing: 4px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
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
      <StyledButton
        href={props.href}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
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
