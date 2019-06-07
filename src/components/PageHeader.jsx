import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';

const PageHeader = styled(Header)`
  background-color: #001f31;
`;

PageHeader.propTypes = {
  children: PropTypes.any,
};

export default PageHeader;
