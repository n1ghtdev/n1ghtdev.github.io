import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H3 } from '../Headings';

const Wrapper = styled.article`
  flex: 0 1 30%;
  padding: 15px 0;
`;

const ImageContainer = styled.div`
  height: 200px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Header = styled.div`
  padding: 10px 0;
  text-align: center;
  color: #7F7F7F;
  transition: all .25s;

  ${Wrapper}:hover & {
    color: #000;
  }
`;

const Item = ({ children, imgSrc, imgAlt }) => (
  <Wrapper>
    <ImageContainer>
      <Image src={imgSrc} alt={imgAlt} />
    </ImageContainer>
    <Header>
      <H3
        fontFamily="ShadowsIntoLight"
        fontSize="1.25rem"
        fontWeight="normal"
        Color="inherit"
      >
        {children}
      </H3>
    </Header>
  </Wrapper>
);

Item.propTypes = {
  children: PropTypes.any,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default Item;
