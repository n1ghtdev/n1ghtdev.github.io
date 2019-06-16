import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';
import { device } from '../breakpoints';

const StyledNav = styled(Nav)`
  @media ${device.mobile} {
    justify-content: center;
  }
`;

const SocialsList = () => (
  <StyledNav Color="#fff" FontFamily="'Ubuntu Mono', monospace">
    <NavItem
      href="https://t.me/n1ckew"
      title="Message me in Telegram"
      target="_blank"
      rel="noopener"
    >
      telegram
    </NavItem>
    <NavItem
      href="https://www.facebook.com/profile.php?id=100001510733487"
      title="My facebook page"
      target="_blank"
      rel="noopener"
    >
      facebook
    </NavItem>
    <NavItem
      href="https://github.com/Nickew"
      title="My github page"
      target="_blank"
      rel="noopener"
    >
      github
    </NavItem>
  </StyledNav>
);

export default SocialsList;
