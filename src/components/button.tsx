import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import ButtonBase from './button-base';

type Props = {
  href?: string;
  to?: string;
  type?: 'button' | 'submit';
  onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
  children: any;
};

function Button(props: Props) {
  const { href, onClick, type, children, ...rest } = props;

  if (props.href) {
    return (
      <ButtonBase
        as="a"
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        {...rest}
      >
        {children}
      </ButtonBase>
    );
  } else if (props.to) {
    return (
      <ButtonBase as={Link} to={props.to} {...rest}>
        {children}
      </ButtonBase>
    );
  }
  return (
    <ButtonBase as="button" onClick={onClick} type={type || 'button'}>
      {children}
    </ButtonBase>
  );
}

export default Button;
