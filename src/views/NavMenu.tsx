import React from 'react';
import styled from 'styled-components';
import A, { AProps } from './A';

type NavMenuItemProps = AProps & { active?: boolean };

const Nav = styled.nav``;
const List = styled.ul`
  list-style-type: none;
  display: flex;
`;
const Item = styled.li`
  font-weight: bold;
  font-size: 14px;
  width: 265px;
  ${({ theme, active }: NavMenuItemProps & { theme: any }) =>
    active &&
    `
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

export const NavMenu = ({ children }: { children: any }) => {
  return (
    <Nav>
      <List>{children}</List>
    </Nav>
  );
};

export const NavMenuItem = (props: NavMenuItemProps) => (
  <Item active={props.active}>
    <A to={props.to}>{props.children}</A>
  </Item>
);
