import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: ${({ Height }) => Height};
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  padding: 10px 10px 7px 10px;
`;

const Image = styled.img`
  display: block;
  height: inherit;
  object-fit: cover;
  border-radius: 5px;
  cursor: zoom-in;
`;

const ImageBox = ({ imgSrc, imgAlt, onClick }) => (
  <Wrapper>
    <Image src={imgSrc} alt={imgAlt} onClick={onClick} />
  </Wrapper>
);

ImageBox.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ImageBox;
