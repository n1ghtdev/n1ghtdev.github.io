import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

type Props = {
  className?: string;
  href?: string;
  to?: string;
  type?: 'button' | 'submit';
  onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
  children: any;
};

const Wrapper = styled.a`
  background: none;
  border: none;

  display: inline-block;
  padding: 10px 15px;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;

  position: relative;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: inherit;
    filter: blur(20px);
    transform: translate3d(0, 0, 0);
  }

  &:hover:before {
  }
`;

const Content = styled.span`
  position: relative;
  z-index: 2;
`;

function Button(props: Props) {
  const { children, ...rest } = props;

  function getAsProp() {
    if (props.href) {
      return 'a';
    } else if (props.to) {
      return Link;
    } else {
      return 'button';
    }
  }

  return (
    <Wrapper as={getAsProp()} {...rest}>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default Button;
