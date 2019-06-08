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
  height: inherit;
  object-fit: cover;
  border-radius: 5px;
`;

const ImageBox = ({ imgSrc, imgAlt }) => (
  <Wrapper>
    <Image src={imgSrc} alt={imgAlt} />
  </Wrapper>
);

ImageBox.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default ImageBox;
