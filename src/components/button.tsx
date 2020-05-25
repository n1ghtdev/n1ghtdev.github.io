import React from "react";
import styled from "styled-components";

type Props = {
  href?: string;
  type?: "button" | "submit";
  onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
  children: any;
};

const StyledButton = styled.a`
  display: inline-block;
  position: relative;
  font-size: 22px;
  transition: all 250ms;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    transition: all 150ms ease-out;
    background: ${({ theme }) => theme.secondary};
    opacity: 0.5;
  }

  &:hover:before {
    height: 6px;
    transform: translateY(22px);
    background: ${({ theme }) => theme.primary};
    opacity: 1;
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
    <StyledButton as="button" onClick={onClick} type={type || "button"}>
      {children}
    </StyledButton>
  );
}

export default Button;
