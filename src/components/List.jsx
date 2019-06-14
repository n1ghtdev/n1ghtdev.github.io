import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const propTypes = {
  children: PropTypes.any,
  Color: PropTypes.string,
  FontSize: PropTypes.string,
  LineHeight: PropTypes.string,
  listStyle: PropTypes.oneOf(['line', 'circle']),
  Margin: PropTypes.string,
};

const defaultProps = {
  Color: '#fff',
  FontSize: 'inherit',
  LineHeight: '1.5',
  listStyle: 'line',
  Margin: '0 0 1rem 0',
};

/* eslint-disable consistent-return */
const List = styled.ul`
  list-style-type: none;
  color: ${({ Color }) => Color};
  font-size: ${({ FontSize }) => FontSize};
  line-height: ${({ LineHeight }) => LineHeight};
  margin: ${({ Margin }) => Margin};

  ${({ listStyle }) => {
    if (listStyle === 'circle') {
      return listStyleCircles;
    }
  }}
`;

const listStyleCircles = css`
  /* ${Item}:before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    background: #1e94c7;
    border-radius: 50%;
    vertical-align: middle;
    margin: 0 10px;
  } */
`;

List.propTypes = propTypes;

List.defaultProps = defaultProps;

export default List;
