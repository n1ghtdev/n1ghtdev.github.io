import React from 'react';
import styled, { css } from 'styled-components';

type NavMenuProps = {
  active?: boolean;
  children: any;
};

export const NavMenu = styled.ul`
  margin-right: -25px;
  list-style-type: none;
  display: flex;
`;

export const VerticalNavMenu = styled.ul`
  display: block;
  margin-bottom: 20px;
  margin-left: 20px;
  list-style-type: none;
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

const VerticalItem = styled.li`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 50px;
  opacity: 0.5;
  & > a {
    padding: 15px 0;
  }
  ${ItemActiveStyles};
  &:after {
    margin-bottom: 3px;
    margin-left: 8px;
  }
`;

const Item = styled.li`
  font-weight: bold;
  font-size: 14px;
  width: 280px;
  & > a {
    padding: 15px 0;
    display: inline-block;
  }
  ${ItemActiveStyles};
`;

export const NavMenuItem = (props: NavMenuProps) => (
  <Item active={props.active}>{props.children}</Item>
);

export const VerticalNavMenuItem = (props: NavMenuProps) => (
  <VerticalItem active={props.active}>{props.children}</VerticalItem>
);
