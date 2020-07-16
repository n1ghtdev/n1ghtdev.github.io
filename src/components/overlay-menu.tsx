import React from 'react';
import styled from 'styled-components';

import NavLink from './nav-link';
import Hamburger from './hamburger';

import { navLinks, socials } from '@config/index';

const Wrapper = styled.div`
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  transition: all 500ms;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  transform: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? 'translateX(0)' : 'translateX(100%)'};
  visibility: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? 'visible' : 'hidden'};
`;

const NavList = styled.ul`
  &:first-child:after {
    content: '';
    width: 1px;
    height: 35px;
    background-color: ${({ theme }: { theme: any }) => theme.text};
    opacity: 0.5;
    display: inline-block;
    margin: 10px 0;
  }
`;

const NavItem = styled.li`
  margin-bottom: 25px;
  font-family: 'Fira Mono', monospace;
  text-transform: capitalize;
  & > a {
    font-size: 22px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const OverlayMenu = () => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [isActive]);

  return (
    <>
      <Hamburger isActive={isActive} onClick={() => setIsActive(!isActive)} />
      <Wrapper isOpen={isActive}>
        <NavList>
          {navLinks &&
            navLinks.map((link: any) => (
              <NavItem key={link.url}>
                <NavLink onClick={() => setIsActive(false)} to={`/${link.url}`}>{link.title}</NavLink>
              </NavItem>
            ))}
        </NavList>
        <NavList>
          {socials &&
            Object.entries(socials).map((link: any) => (
              <NavItem key={link[1]}>
                <NavLink href={link[1]}>{link[0]}</NavLink>
              </NavItem>
            ))}
        </NavList>
      </Wrapper>
    </>
  );
};

export default OverlayMenu;
