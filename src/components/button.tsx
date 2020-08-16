import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

type BaseButtonProps = {
  children: string | React.ReactNode;
  className?: string;
  to?: string;
};
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<any>;
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<any>;
type Props = Partial<AnchorButtonProps & NativeButtonProps>;

const ButtonStyles = css`
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;

  display: inline-block;
  padding: 12px 16px;

  transition: background-position 250ms;
  position: relative;
  background-size: 300% 100%;
  background-image: ${({ theme }) =>
    `linear-gradient(to right,
      ${theme.primary},
      ${theme.secondary},
      ${theme.secondary},
      ${theme.primary})`};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: inherit;
    filter: blur(10px);
    transform: translate3d(0, 0, 0);
  }

  &:focus {
    outline: 2px solid rgba(0, 0, 0, 0.5);
  }

  &:hover {
    background-position: 100% 0;
  }
`;

const Content = styled.span`
  position: relative;
  z-index: 2;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-transform: capitalize;
`;

const HTMLButton = styled.button`
  ${ButtonStyles}
  transition: filter 250ms;
  &:disabled {
    filter: grayscale(0.6);
    cursor: not-allowed;
  }
  &:hover:disabled {
    background-position: 0 0;
  }
`;
const HTMLAnchor = styled.a`
  ${ButtonStyles}
`;
const GatsbyLink = styled(Link)`
  ${ButtonStyles}
`;

function Button(props: Props) {
  const { children, ...rest } = props;

  if (props.href) {
    return (
      <HTMLAnchor {...rest}>
        <Content>{children}</Content>
      </HTMLAnchor>
    );
  } else if (props.to) {
    return (
      <GatsbyLink to={props.to}>
        <Content>{children}</Content>
      </GatsbyLink>
    );
  }
  return (
    <HTMLButton {...rest}>
      <Content>{children}</Content>
    </HTMLButton>
  );
}

export default Button;
