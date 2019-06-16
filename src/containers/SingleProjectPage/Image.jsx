import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  cursor: zoom-in;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  &:hover {
    opacity: 0.75;
  }
`;

Image.propTypes = {
  children: PropTypes.any,
};

export default Image;
