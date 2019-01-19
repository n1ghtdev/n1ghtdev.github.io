import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ Color }) => Color};
`;

Paragraph.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.string,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  Color: PropTypes.string,
};

Paragraph.defaultProps = {
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 'normal',
  Color: '#000',
};

export default Paragraph;
