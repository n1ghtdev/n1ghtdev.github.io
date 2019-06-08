import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from './A';

const NavItem = styled(A)`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
  &:after {
    content: '';
    display: inline-block;
    margin-left: 20px;
    vertical-align: middle;
    width: 5px;
    height: 5px;
    background-color: #c4c4c4;
  }
  &:last-child:after {
    display: none;
  }
`;

NavItem.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
};

export default NavItem;
