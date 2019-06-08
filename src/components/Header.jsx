import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  position: relative;
  background-color: #001f31;
  height: 75px;
`;

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
