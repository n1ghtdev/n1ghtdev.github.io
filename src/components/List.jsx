import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const propTypes = {
  children: PropTypes.any,
  Color: PropTypes.string,
  FontSize: PropTypes.string,
  LineHeight: PropTypes.string,
  Margin: PropTypes.string,
};

const defaultProps = {
  Color: '#fff',
  FontSize: 'inherit',
  LineHeight: '1.5',
  Margin: '0 0 1rem 0',
};

const List = styled.ul`
  list-style-type: none;
  color: ${({ Color }) => Color};
  font-size: ${({ FontSize }) => FontSize};
  line-height: ${({ LineHeight }) => LineHeight};
  margin: ${({ Margin }) => Margin};
`;

List.propTypes = propTypes;

List.defaultProps = defaultProps;

export default List;
