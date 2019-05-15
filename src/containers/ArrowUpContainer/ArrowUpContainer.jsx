import React from 'react';
import PropTypes from 'prop-types';
import ArrowUp from '../../components/ArrowUp';

const ArrowUpContainer = ({ isVisible, onClick }) => (
  <ArrowUp Toggle={isVisible} onClick={onClick} />
);

ArrowUpContainer.propTypes = {
  isVisible: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ArrowUpContainer;
