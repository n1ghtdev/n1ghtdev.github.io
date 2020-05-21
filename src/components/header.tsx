import React from 'react';
import styled from 'styled-components';

import NavLink from './nav-link';
import { NavMenu, NavMenuItem } from './menu';
import OverlayMenu from './overlay-menu';

import { fadeIn } from '@styles/animations';
import media, { breakpoints } from '@styles/media';

import useRaf from '@hooks/use-raf';
import { navLinks } from '@config/index';

type ScrollDirection = 'top' | 'down' | 'up';

const Wrapper = styled.header`
  position: fixed;
  top: 0;

  width: 100%;
  height: 50px;
  padding: 0 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;

  transition: transform 250ms;
  background: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid ${({ theme }) => theme.secondary};

  transform: ${({ scrollDirection }: { scrollDirection: ScrollDirection }) =>
    scrollDirection === 'down' ? 'translateY(-75px)' : 'translateY(0px)'};

  ${media.medium`
    padding: 0 100px;
  `}
`;

const PageTitle = styled.h1`
  font-size: 14px;
  animation: ${fadeIn} 250ms forwards linear;
  animation-delay: 250ms;
  opacity: 0;
`;

const PrimaryPageTitle = styled.span`
  color: ${({ theme }) => theme.primary};
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
  const lastScrollTop = React.useRef<number | undefined>();

  React.useEffect(() => {
    lastScrollTop.current =
      window.pageYOffset || document.documentElement.scrollTop;
  }, []);

  React.useEffect(() => {
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

    if (scrollTop === (lastScrollTop.current || 0)) {
      return false;
    }

    if (scrollTop < 250) {
      setScrollDirection('top');
    }

    if (scrollTop > 250) {
      if (scrollTop > (lastScrollTop.current || 0)) {
        setScrollDirection('down');
      } else if (scrollTop < (lastScrollTop.current || 0)) {
        setScrollDirection('up');
      }
    }

    lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
  }, []);

  const stopRaf = useRaf(handleScroll, isActive);

  return (
    <Wrapper scrollDirection={scrollDirection}>
      <PageTitle>
        nightdev.<PrimaryPageTitle color="primary">portfolio</PrimaryPageTitle>
      </PageTitle>
      <AnimatedNavMenu>
        {navLinks &&
          navLinks.map((link: any) => (
            <NavMenuItem key={link.url}>
              <NavLink to={link.url}>{link.title}</NavLink>
            </NavMenuItem>
          ))}
      </AnimatedNavMenu>
      <OverlayMenu />
    </Wrapper>
  );
};

export default Header;
