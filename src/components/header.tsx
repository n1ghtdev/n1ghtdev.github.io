import React from 'react';
import styled from 'styled-components';
import NavLink from './navLink';
import { NavMenu, NavMenuItem } from './menu';
import { fadeIn } from '../styles/animations';

type ScrollDirection = 'top' | 'down' | 'up';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
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
  const lastScrollTop = React.useRef(
    window.pageYOffset || document.documentElement.scrollTop,
  );
  const raf = React.useRef<number | null>(null);

  // TODO: disable on mobile
  React.useEffect(() => {
    const _handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop === lastScrollTop.current) {
        requestAnimationFrame(_handleScroll);
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
      requestAnimationFrame(_handleScroll);
    };

    raf.current && cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(_handleScroll);
    return () => {
      raf.current && cancelAnimationFrame(raf.current);
    };
  }, [scrollDirection]);
  console.log('rerender');

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
