import React from 'react';
import styled, { css } from 'styled-components';

type NavMenuProps = {
  active?: boolean;
  children: any;
};

export const NavMenu = styled.ul`
  list-style-type: none;
  display: inline-flex;
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
  margin-right: 40px;
  & > a {
    display: inline-block;
  }
  ${ItemActiveStyles};
`;

export const NavMenuItem = (props: NavMenuProps) => (
  <Item active={props.active}>{props.children}</Item>
);
