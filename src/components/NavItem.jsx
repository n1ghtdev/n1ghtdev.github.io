import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from './A';

const NavItem = styled(A)`
  margin-right: 20px;
`;

NavItem.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
};

export default NavItem;
