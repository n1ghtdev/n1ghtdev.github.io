import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: ${({ listDir }) => listDir};
  list-style-type: ${({ listStyle }) => listStyle};
  flex-wrap: ${({ flexWrap }) => flexWrap};
`;

List.propTypes = {
  children: PropTypes.any,
  listDir: PropTypes.oneOf([
    'row', 'column',
  ]),
  listStyle: PropTypes.string,
  flexWrap: PropTypes.oneOf([
    'wrap', 'nowrap',
  ]),
};

List.defaultProps = {
  listDir: 'row',
  listStyle: 'none',
  flexWrap: 'nowrap',
};

export default List;
