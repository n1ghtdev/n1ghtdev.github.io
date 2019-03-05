import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ Color }) => Color};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
`;

Paragraph.propTypes = {
  children: PropTypes.any,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  Color: PropTypes.string,
  lineHeight: PropTypes.number,
  textAlign: PropTypes.oneOf([
    'center', 'right', 'left', 'inherit', 'initial',
  ]),
};

Paragraph.defaultProps = {
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 'normal',
  Color: '#fff',
  lineHeight: 1.5,
  textAlign: 'inherit',
};

export default Paragraph;
