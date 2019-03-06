import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  &:last-child {
    margin-right: 0;
  }
  &:after {
    content: '';
    display: inline-block;
    width: 2px;
    height: 2px;
    background: #8B8B8B;
    vertical-align: middle;
    margin: 0 10px;
  }
  &:last-child:after {
    display: none;
  }
`;

Item.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default Item;
