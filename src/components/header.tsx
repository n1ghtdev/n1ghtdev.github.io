import React from 'react';
import styled from 'styled-components';

import NavLink from './nav-link';
import NavMenu from './nav-menu';
import NavItem from './nav-item';
import OverlayMenu from './overlay-menu';

import { fadeIn } from '@styles/animations';
import { navLinks } from '@config/index';

const Wrapper = styled.header`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
`;

const Name = styled.h1`
  font-weight: normal;
  font-size: 16px;
  font-weight: bold;
  animation: ${fadeIn} 250ms forwards linear;
  animation-delay: 250ms;
  opacity: 0;
`;

const AnimatedNavMenu = styled(NavMenu)`
  animation: ${fadeIn} 250ms forwards linear;
  animation-delay: 250ms;
  opacity: 0;
`;

const Header = () => {
  return (
    <Wrapper>
      <Name>night</Name>
      <AnimatedNavMenu>
        {navLinks.map((link: any) => (
          <NavItem key={link.url}>
            <NavLink to={`/${link.url}`}>{link.title}</NavLink>
          </NavItem>
        ))}
      </AnimatedNavMenu>
      <OverlayMenu />
    </Wrapper>
  );
};

export default Header;
