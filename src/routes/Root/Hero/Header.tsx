import React from 'react';
import styled from 'styled-components';
import { Wrapper, Title, TitleSpanPrimary } from './styles';
import { NavMenu, NavMenuItem } from '../../../views/NavMenu';
import A from '../../../views/A';

const StyledWrapper = styled(Wrapper)`
  padding-top: 25px;
  /* height: 75px; */
`;

const Trademark = styled(Title)`
  font-size: 14px;
`;

const Header = () => {
  return (
    <StyledWrapper as="header">
      <Trademark as="h1">
        nightdev. <TitleSpanPrimary>portfolio</TitleSpanPrimary>
      </Trademark>
      <NavMenu>
        <NavMenuItem active>
          <A to="/">home</A>
        </NavMenuItem>
        <NavMenuItem>
          <A to="/projects">projects</A>
        </NavMenuItem>
        <NavMenuItem>
          <A to="/about">about</A>
        </NavMenuItem>
      </NavMenu>
    </StyledWrapper>
  );
};

export default Header;
