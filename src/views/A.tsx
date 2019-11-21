import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledA = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

export interface AProps {
  to?: string;
  children: any;
  href?: string;
}

const A = (props: AProps) => {
  if (props.to) {
    return (
      <StyledA as={Link} to={props.to}>
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
