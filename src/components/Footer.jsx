import PropTypes from 'prop-types';
import styled from 'styled-components';

const Footer = styled.footer`
  color: #000;
  margin-bottom: 30px;
`;

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
