import React from 'react';
import styled from 'styled-components';

import NavLink from './navLink';
import { NavMenu, NavMenuItem } from './menu';

import { fadeIn } from '../styles/animations';
import media, { breakpoints } from '../styles/media';

import useRaf from '../hooks/useRaf';

type ScrollDirection = 'top' | 'down' | 'up';

const Wrapper = styled.header`
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  background-color: ${({ theme }: { theme: any }) => theme.contrast};
  z-index: 3;
  transition: transform 250ms;

  box-shadow: ${({ scrollDirection }: { scrollDirection: ScrollDirection }) =>
    scrollDirection === 'up' ? '2px 3px 4px rgba(0,0,0,.3)' : 'none'};
  transform: ${({ scrollDirection }: { scrollDirection: ScrollDirection }) =>
    scrollDirection === 'down' ? 'translateY(-75px)' : 'translateY(0px)'};

  ${media.medium`
    display: flex;
  `}
`;

const PageTitle = styled.h1`
  font-size: 14px;
  animation: ${fadeIn} 250ms forwards linear;
  animation-delay: 250ms;
  opacity: 0;
`;
const PrimaryPageTitle = styled.span`
  color: ${({ theme }: { theme: any }) => theme.primary};
`;
const AnimatedNavMenu = styled(NavMenu)`
  animation: ${fadeIn} 250ms forwards linear;
  animation-delay: 250ms;
  opacity: 0;
`;

const Header = () => {
  const [scrollDirection, setScrollDirection] = React.useState<ScrollDirection>(
    'top',
  );
  const [isActive, setIsActive] = React.useState(true);
  const lastScrollTop = React.useRef(
    window.pageYOffset || document.documentElement.scrollTop,
  );

  React.useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= breakpoints.medium) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };
    handleResize();
    // TODO: throttle
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = React.useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === lastScrollTop.current) {
      return false;
    }

    if (scrollTop < 250) {
      setScrollDirection('top');
    }

    if (scrollTop > 250) {
      if (scrollTop > lastScrollTop.current) {
        setScrollDirection('down');
      } else if (scrollTop < lastScrollTop.current) {
        setScrollDirection('up');
      }
    }

    lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
  }, []);

  const stopRaf = useRaf(handleScroll, isActive);

  return (
    <Wrapper scrollDirection={scrollDirection}>
      <PageTitle>
        nightdev. <PrimaryPageTitle color="primary">developer</PrimaryPageTitle>
      </PageTitle>
      <AnimatedNavMenu>
        <NavMenuItem>
          <NavLink to="#hero">home</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink to="#featured">featured</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink to="#projects">projects</NavLink>
        </NavMenuItem>
      </AnimatedNavMenu>
    </Wrapper>
  );
};

export default Header;
