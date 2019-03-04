import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  display: inline-flex;
  flex-direction: ${({ listDir }) => listDir};
  list-style-type: ${({ listStyle }) => listStyle};
`;

List.propTypes = {
  children: PropTypes.any,
  listDir: PropTypes.oneOf([
    'row', 'column',
  ]),
  listStyle: PropTypes.string,
};

List.defaultProps = {
  listDir: 'row',
  listStyle: 'none',
};

export default List;
