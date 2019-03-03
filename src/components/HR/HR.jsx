import PropTypes from 'prop-types';
import styled from 'styled-components';

const HR = styled.div`
  width: ${({ hrWidth }) => hrWidth};
  border-bottom-width: ${({ hrThickness }) => `${hrThickness}px`};
  border-bottom-style: ${({ hrStyle }) => hrStyle};
  border-bottom-color: ${({ hrColor }) => hrColor};
  margin: ${({ Offset }) => typeof Offset === 'string' ? Offset : `${Offset}px`} auto;
`;

HR.propTypes = {
  hrWidth: PropTypes.string,
  hrThickness: PropTypes.number,
  hrStyle: PropTypes.string,
  hrColor: PropTypes.string,
  Offset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

HR.defaultProps = {
  hrWidth: '100%',
  hrThickness: 1,
  hrStyle: 'solid',
  hrColor: '#fff',
  Offset: 10,
};

export default HR;
