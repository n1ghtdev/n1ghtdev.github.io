import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.any,
  FontSize: PropTypes.string,
  FontStyle: PropTypes.string,
  FontWeight: PropTypes.string,
  FontFamily: PropTypes.string,
  Color: PropTypes.string,
};

const defaultProps = {
  FontSize: 'inherit',
  FontFamily: 'inherit',
  Color: 'inherit',
};

const Span = styled.span`
  font-size: ${({ FontSize }) => FontSize};
  font-style: ${({ FontStyle }) => FontStyle};
  font-weight: ${({ FontWeight }) => FontWeight};
  font-family: ${({ FontFamily }) => FontFamily};
  color: ${({ Color }) => Color};
`;

Span.propTypes = propTypes;

Span.defaultProps = defaultProps;

export default Span;
