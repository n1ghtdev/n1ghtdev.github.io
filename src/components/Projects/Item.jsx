import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H3 } from '../Headings';
import ItemHover from './ItemHover';

const Wrapper = styled.article`
  flex: 0 1 30%;
  padding: 15px 0;
  position: relative;
`;

const ImageContainer = styled.div`
  height: 200px;
  position: relative;
  transition: all .25s;
  /* &:hover {
    height: 230px;
    position: absolute;
  } */
`;

/*
  default state: pos rel, h 200
  hover: state: pos abs, h 230
  onHover: pos abs -> h 230 -> which works as intended
  onLeaveHover: pos rel -> h 200 -> yep
  because of transition with .25s it waits for height, but not for position
*/

const Hover = styled(ItemHover)`
  ${ImageContainer}:hover & {
    display: block;
  }
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

const onHover = (e) => {
  e.target.parentElement.style.height = '230px';
};

const onHoverOff = (e) => {
  e.target.parentElement.style.height = '200px';
};

const Item = ({ children, imgSrc, imgAlt, description, tools }) => (
  <Wrapper>
    <ImageContainer onMouseEnter={onHover} onMouseLeave={onHoverOff}>
      <Image src={imgSrc} alt={imgAlt} />
      <Hover description={description} tools={tools} />
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
  description: PropTypes.string,
  tools: PropTypes.array,
};

export default Item;
