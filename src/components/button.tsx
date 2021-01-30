import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { THEME } from '@styles/theme';

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
  background-color: ${THEME.PRIMARY};

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

const LinkExternal = styled.a`
  ${ButtonStyles}
`;

const LinkInternal = styled(Link)`
  ${ButtonStyles}
`;

function Button(props: Props) {
  const { children, ...rest } = props;

  if (props.to) {
    return (
      <LinkInternal to={props.to} {...rest}>
        {children}
      </LinkInternal>
    );
  }
  return <LinkExternal {...rest}>{children}</LinkExternal>;
}

export default Button;
