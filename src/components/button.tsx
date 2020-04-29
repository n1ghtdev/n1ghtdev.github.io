import React from 'react';
import styled from 'styled-components';

type Props = {
  href?: string;
  type?: 'button' | 'submit';
  onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
  children: any;
};

const StyledButton = styled.a`
  position: relative;
  display: inline-block;
  padding: 8px 16px;

  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: bold;

  background: #000;
  border: 1px solid ${({ theme }) => theme.text};
  transition: background-color 250ms ease-in;

  &:hover {
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 5px;
    left: 5px;
    border: 1px solid ${({ theme }) => theme.text};
  }
`;

function Button(props: Props) {
  const { href, onClick, type, children, ...rest } = props;
  if (props.href) {
    return (
      <StyledButton
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        {...rest}
      >
        {children}
      </StyledButton>
    );
  }
  return (
    <StyledButton as="button" onClick={onClick} type={type || 'button'}>
      {children}
    </StyledButton>
  );
}

export default Button;
