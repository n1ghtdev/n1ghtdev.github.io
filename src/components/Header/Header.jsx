import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  position: relative;
  height: ${({ Height }) => Height};
  background: linear-gradient(180deg, #080E1F 0%, #0A0B10 100%);
`;

Header.propTypes = {
  children: PropTypes.any,
  Height: PropTypes.string,
};

Header.defaultProps = {
  Height: '100vh',
};

export default Header;
