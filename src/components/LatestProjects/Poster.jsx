import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Col from '../Col';

const Container = styled.article`
  position: relative;
  height: 428px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, .45);

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 105%;
    height: 110%;
    border: 1px solid rgba(255,255,255, .1);
    border-radius: 5px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 3px;
`;

const Poster = ({ imgSrc, imgAlt }) => (
  <Container as={Col} lg={8}>
    <Image src={imgSrc} alt={imgAlt} />
  </Container>
);

Poster.propTypes = {
  // Id: PropTypes.number,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default Poster;
