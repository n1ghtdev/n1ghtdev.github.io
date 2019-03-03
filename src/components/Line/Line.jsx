import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomLine = styled.div`
  background: ${({ LineColor }) => LineColor};
  left: ${({ align }) => `${align}%`};
  position: absolute;
  height: 100%;
  width: 1px;
  top: 0;
  z-index: 1;
`;

const Line = ({ LineColor }) => (
  <Fragment>
    <CustomLine align={15} LineColor={LineColor} />
    <CustomLine align={32.5} LineColor={LineColor} />
    <CustomLine align={50} LineColor={LineColor} />
    <CustomLine align={67.5} LineColor={LineColor} />
    <CustomLine align={85} LineColor={LineColor} />
  </Fragment>
);

Line.propTypes = {
  LineColor: PropTypes.string,
};

Line.defaultProps = {
  LineColor: '#eee',
};

export default Line;
