import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.any,
  TextDecoration: PropTypes.string,
  FontWeight: PropTypes.string,
  FontSize: PropTypes.string,
  FontStyle: PropTypes.string,
  Color: PropTypes.string,
};

const defaultProps = {
  TextDecoration: 'none',
  Color: 'inherit',
  FontSize: 'inherit',
  FontWeight: 'inherit',
  FontStyle: 'inherit',
};

const A = styled.a`
  text-decoration: ${({ TextDecoration }) => TextDecoration};
  font-weight: ${({ FontWeight }) => FontWeight};
  font-size: ${({ FontSize }) => FontSize};
  font-style: ${({ FontStyle }) => FontStyle};
  color: ${({ Color }) => Color};

  &:hover {
    text-decoration: underline;
  }
`;

A.propTypes = propTypes;

A.defaultProps = defaultProps;

export default A;
