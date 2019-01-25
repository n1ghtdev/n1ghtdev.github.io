import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemHover = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: translateY(-100%);
`;

ItemHover.propTypes = {
  children: PropTypes.any,
};

export default ItemHover;
