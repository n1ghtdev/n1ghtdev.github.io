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
    <NavItem href="#telegram">telegram</NavItem>
    <NavItem href="#facebook">facebook</NavItem>
    <NavItem href="#github">github</NavItem>
  </StyledNav>
);

export default SocialsList;
