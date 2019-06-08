import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RouterNavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

RouterNavItem.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string.isRequired,
};

export default RouterNavItem;
