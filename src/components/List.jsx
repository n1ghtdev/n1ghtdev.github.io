import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.any,
  ListStyleType: PropTypes.string,
  Color: PropTypes.string,
  FontSize: PropTypes.string,
  LineHeight: PropTypes.string,
};

const defaultProps = {
  ListStyleType: 'none',
  Color: '#fff',
  FontSize: 'inherit',
  LineHeight: '1.5',
};

const List = styled.ul`
  color: ${({ Color }) => Color};
  font-size: ${({ FontSize }) => FontSize};
  line-height: ${({ LineHeight }) => LineHeight};
  margin-bottom: 1rem;
`;

const Item = styled.li`
  &:before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 2px;
    background: #fff;
    vertical-align: middle;
    margin: 0 10px;
  }
`;

List.propTypes = propTypes;

List.defaultProps = defaultProps;

List.Item = Item;

export default List;
