import React from 'react';
import styled, { css } from 'styled-components';
import media from '../styles/media';

type NavMenuProps = {
  active?: boolean;
  children: any;
};

export const NavMenu = styled.ul`
  list-style-type: none;
  display: none;

  ${media.medium`
    display: inline-flex;
  `}
`;

const InactiveStyles = css`
  &:after {
    content: '';
    margin-left: 5px;
    display: inline-block;
    width: 6px;
    height: 6px;
  }
`;
const ActiveStyles = css`
  ${({ theme }: { theme: any }) => `
    opacity: 1;
    &:after {
      content: '';
      margin-left: 5px;
      display: inline-block;
      background-color: ${theme.primary};
      width: 6px;
      height: 6px;
      border-radius: 50%;
      vertical-align: middle;
    }
  `}
`;

const Item = styled.li`
  font-weight: bold;
  font-size: 14px;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
  & > a {
    display: inline-block;
    transition: opacity 250ms;
    color: ${({ theme }: { theme: any }) => theme.brightDark};
    &:hover {
      opacity: 0.5;
    }

    ${InactiveStyles};
    &.active {
      color: ${({ theme }: { theme: any }) => theme.bright};
      ${ActiveStyles};
    }
  }
`;

export const NavMenuItem = (props: NavMenuProps) => (
  <Item>{props.children}</Item>
);
