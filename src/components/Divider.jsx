import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: ${({ Margin }) => Margin};
  display: block;
  text-align: center;
  color: ${({ Color }) => Color};
  user-select: none;
`;

const Divider = ({ Color, Margin, Length, Symbol }) => (
  <Wrapper Margin={Margin} Color={Color}>
    {Array(Length).fill(Symbol)}
  </Wrapper>
);

Divider.propTypes = {
  Color: PropTypes.string,
  Margin: PropTypes.string,
  Length: PropTypes.number,
  Symbol: PropTypes.string,
};

Divider.defaultProps = {
  Color: '#000',
  Margin: '20px 0',
  Symbol: '/',
};

export default Divider;
