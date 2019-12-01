import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

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

const withButtonBase = <P extends ButtonProps>(
  StyledButton: React.ComponentType<P & { as: 'a' | 'button' }>,
) => (props: P) => (
  <StyledButton
    as={props.href ? 'a' : props.onClick && 'button'}
    {...(props as any)}
  />
);

const StyledButtonPrimary = styled(ButtonBaseStyles)`
  background-color: ${(props: ButtonProps) => theme.primary};
  color: #fff;
  position: relative;
  overflow: hidden;
  transition: color background-color 250ms 500ms ease-in;
  &:after {
    content: '';
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    height: 50px;
    width: 50px;
    opacity: 0;
    background: ${(props: ButtonProps) => theme.contrast};
    border-radius: 50%;
    transition: transform 500ms ease-in-out;
    /* transform: translateX(-100%); */
  }
  &:hover {
    &:after {
      opacity: 1;
      transform: translate(-50%, -50%) scale(3);
    }
  }
`;

const StyledTransparentPrimary = styled(ButtonBaseStyles)`
  background: none;
  border: 2px solid ${(props: ButtonProps) => theme.primary};
  color: #fff;
  box-shadow: inset 0 0 10px ${(props: ButtonProps) => theme.primary},
    0 0 10px ${(props: ButtonProps) => theme.primary};
  filter: brightness(120%);
  position: relative;
  overflow: hidden;
  transition: color background-color 250ms 350ms ease-in;
  &:after {
    content: '';
    position: absolute;
    display: block;
    left: 0px;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -2;
    background: ${(props: ButtonProps) => theme.primary};
    opacity: 0.7;
    transform: translateX(-100%);
    transition: transform 250ms ease-in;
  }
  &:before {
    content: '';
    position: absolute;
    display: block;
    left: 0px;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: ${(props: ButtonProps) => theme.primary};
    transform: translateX(-100%);
    transition: transform 250ms 250ms ease-out;
  }
  &:hover {
    background-color: transparent;
    &:after {
      transform: translateX(0%);
    }
    &:before {
      transform: translateX(0%);
    }
  }
`;

export const ButtonPrimary = withButtonBase(StyledButtonPrimary);
export const ButtonTransparent = withButtonBase(StyledTransparentPrimary);
