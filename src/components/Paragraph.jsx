import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.any,
  FontFamily: PropTypes.string,
  FontSize: PropTypes.string,
  FontStyle: PropTypes.string,
  FontWeight: PropTypes.string,
  LineHeight: PropTypes.string,
  Color: PropTypes.string,
  textAlign: PropTypes.oneOf(['center', 'right', 'left', 'inherit', 'initial']),
  Margin: PropTypes.string,
};

const defaultProps = {
  FontSize: 'inherit',
  FontFamily: 'inherit',
  Color: '#000',
  LineHeight: '1.5',
  textAlign: 'inherit',
};

const Paragraph = styled.p`
  font-family: ${({ FontFamily }) => FontFamily};
  font-size: ${({ FontSize }) => FontSize};
  font-style: ${({ FontStyle }) => FontStyle};
  font-weight: ${({ FontWeight }) => FontWeight};
  color: ${({ Color }) => Color};
  line-height: ${({ LineHeight }) => LineHeight};
  text-align: ${({ textAlign }) => textAlign};
  margin: ${({ Margin }) => Margin};
`;

Paragraph.propTypes = propTypes;

Paragraph.defaultProps = defaultProps;

export default Paragraph;
