import PropTypes from 'prop-types';
import styled from 'styled-components';

const Span = styled.span`
font-size: ${({ fontSize }) => fontSize};
font-style: ${({ fontStyle }) => fontStyle};
font-weight: ${({ fontWeight }) => fontWeight};
color: ${({ Color }) => Color};
`;

Span.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.string,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  Color: PropTypes.string,
};

Span.defaultProps = {
  fontSize: 'inherit',
  fontStyle: 'normal',
  fontWeight: 'normal',
  Color: '#fff',
};

export default Span;
