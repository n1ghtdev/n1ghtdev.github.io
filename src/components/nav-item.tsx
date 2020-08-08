import styled from 'styled-components';

const NavItem = styled.li`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  margin-right: 50px;
  &:last-child {
    margin-right: 0;
  }
  & > a {
    display: inline-block;
    transition: opacity 250ms;
    color: ${({ theme }) => theme.text};

    &:hover {
      opacity: 0.5;
    }

    &.active {
      text-decoration: underline;
    }
  }
`;

export default NavItem;
