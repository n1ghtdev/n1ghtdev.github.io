import React from 'react';
import styled from 'styled-components';

import theme from '@styles/theme';
import media from '@styles/media';
import { socials } from '@config/index';

import Telegram from './assets/telegram';
import Github from './assets/github';
import Gitlab from './assets/gitlab';
import Codepen from './assets/codepen';
import Codesandbox from './assets/codesandbox';

const Overlay = styled.div`
  display: none;
  position: relative;
  z-index: 1;
  opacity: 0.7;
  a {
    transition: opacity 250ms;
    &:hover {
      opacity: 0.5;
    }
  }

  ${media.xl`
    display: block;
  `}
`;

const Nav = styled.ul`
  position: fixed;
  bottom: 0;
  left: 5%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 60px;
    background-color: ${({ theme }: { theme: any }) => theme.brightDark};
  }
`;
const NavItem = styled.li`
  margin-bottom: 15px;
`;

const Email = styled.div`
  position: fixed;
  bottom: 0;
  right: 5%;
  display: inline-flex;
  flex-direction: column;

  & > a {
    width: 0px;
    transform: rotate(90deg);
    margin-bottom: 170px;
    font-size: 18px;
  }
  &:after {
    content: '';
    display: block;
    align-self: center;
    width: 1px;
    height: 60px;
    background-color: ${({ theme }: { theme: any }) => theme.brightDark};
  }
`;

const Socials = () => {
  return (
    <Overlay>
      <Nav>
        <NavItem>
          <a href={socials.telegram} target="_blank" rel="noopener noreferrer">
            <Telegram color={theme.brightDark} />
          </a>
        </NavItem>
        <NavItem>
          <a href={socials.github} target="_blank" rel="noopener noreferrer">
            <Github width="24" height="24" color={theme.brightDark} />
          </a>
        </NavItem>
        <NavItem>
          <a href={socials.gitlab} target="_blank" rel="noopener noreferrer">
            <Gitlab color={theme.brightDark} />
          </a>
        </NavItem>
        <NavItem>
          <a
            href={socials.codesandbox}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Codesandbox color={theme.brightDark} />
          </a>
        </NavItem>
        <NavItem>
          <a href={socials.codepen} target="_blank" rel="noopener noreferrer">
            <Codepen color={theme.brightDark} />
          </a>
        </NavItem>
      </Nav>
      <Email>
        <a href={`mailto://${socials.email}`}>{socials.email}</a>
      </Email>
    </Overlay>
  );
};

export default Socials;