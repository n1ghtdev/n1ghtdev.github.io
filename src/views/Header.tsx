import React from 'react';
import styled from 'styled-components';
import { NavMenu, NavMenuItem } from './NavMenu';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 14px;
`;

const TitleSpanPrimary = styled.span`
  color: ${({ theme }: { theme: any }) => theme.primary || 'initial'};
`;

const Header = () => {
  return (
    <Wrapper>
      <Title>
        nightdev. <TitleSpanPrimary>portfolio</TitleSpanPrimary>
      </Title>
      <NavMenu>
        <NavMenuItem to="/" active>
          home
        </NavMenuItem>
        <NavMenuItem to="/projects">projects</NavMenuItem>
        <NavMenuItem to="/about">about</NavMenuItem>
      </NavMenu>
    </Wrapper>
  );
};

export default Header;
