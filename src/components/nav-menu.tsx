import styled from 'styled-components';
import media from '@styles/media';

const NavMenu = styled.ul`
  list-style-type: none;
  display: none;

  ${media.medium`
    display: inline-flex;
  `}
`;

export default NavMenu;
