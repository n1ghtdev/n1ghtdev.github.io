import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type To = {
  pathname?: string;
  search?: string;
  state?: Object;
};

type AProps = {
  to?: string | To;
  children: any;
  href?: string;
  onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
};

const StyledA = styled.a`
  color: inherit;
  text-decoration: inherit;
  &:focus {
    outline: none;
  }
`;

const A = (props: AProps) => {
  if (props.to) {
    return (
      <StyledA as={Link} to={props.to}>
        {props.children}
      </StyledA>
    );
  } else if (props.onClick) {
    return (
      <StyledA role="button" tabIndex={0} onClick={props.onClick}>
        {props.children}
      </StyledA>
    );
  }
  return (
    <StyledA href={props.href} target="_blank" rel="noopener">
      {props.children}
    </StyledA>
  );
};

export default A;
