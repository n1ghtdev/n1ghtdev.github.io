import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowUpSvg from './ArrowUpSvg';

const Wrapper = styled.div`
  position: fixed;
  right: 50px;
  bottom: 150px;
  z-index: 9999;
  /* padding: 0 30px 20px 0; */
`;

const ArrowUp = (props) => (
  <Wrapper>
    <ArrowUpSvg />
  </Wrapper>
);

ArrowUp.propTypes = {
  children: PropTypes.any,
};

export default ArrowUp;
