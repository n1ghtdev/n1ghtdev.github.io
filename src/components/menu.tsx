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

const ItemActiveStyles = css`
  ${({ theme, active }: NavMenuProps & { theme: any }) =>
    active &&
    `
    opacity: 1;
    &:after {
      content: '';
      margin-left: 5px;
      display: inline-block;
      background-color: ${theme.primary};
      width: 7px;
      height: 7px;
      border-radius: 50%;
    }
  `}
`;

const Item = styled.li`
  font-weight: bold;
  font-size: 14px;
  margin-right: 30px;
  & > a {
    display: inline-block;
    transition: opacity 250ms;
    &:hover {
      opacity: 0.5;
    }
  }
  &:not(:first-child):before {
    content: '';
    display: inline-block;
    width: 35px;
    margin-right: 7px;
    height: 1px;
    background-color: ${({ theme }: { theme: any }) => theme.brightDark};
    opacity: 0.5;
    vertical-align: middle;
  }
  ${ItemActiveStyles};
`;

export const NavMenuItem = (props: NavMenuProps) => (
  <Item active={props.active}>{props.children}</Item>
);
