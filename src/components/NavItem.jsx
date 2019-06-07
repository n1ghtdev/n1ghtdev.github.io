import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import A from './A';

const NavItem = styled(A)`
  ${({ divider }) => {
    if (divider === 'square') {
      return SquareDivider;
    }
  }}
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
const SquareDivider = css`
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
