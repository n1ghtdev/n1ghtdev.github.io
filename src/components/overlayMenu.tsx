import React from 'react';
import styled from 'styled-components';
import NavLink from './navLink';
import Hamburger from './hamburger';
import { navLinks } from '../config';

const Wrapper = styled.div`
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }: { theme: any }) => theme.contrastLow};
  transition: all 500ms;

  transform: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? 'translateX(0)' : 'translateX(100%)'};
  visibility: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? 'visible' : 'hidden'};
`;

const NavList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NavItem = styled.li`
  &:after {
    content: '';
    width: 2px;
    height: 20px;
    background-color: ${({ theme }: { theme: any }) => theme.brightDark};
    display: block;
    margin: 10px auto;
  }

  & > a {
    font-size: 24px;
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
                <NavLink to={link.url}>{link.title}</NavLink>
              </NavItem>
            ))}
        </NavList>
      </Wrapper>
    </>
  );
};

export default OverlayMenu;
