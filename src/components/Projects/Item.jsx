import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Col from '../Col';

const ItemWrapper = styled.div`
  position: relative;
`;

const ItemPoster = styled.div`
`;

const ItemContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 5px;
  opacity: 0;
  transition: all .25s;
  &:hover {
    opacity: 1;
    background: rgba(255,255,255, .7);
  }
`;

const ItemTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.5;
`;

const ItemDescription = styled.p`

`;

const LinkWrap = styled.a`

`;

const Tools = styled.ul`
  display: flex;
  list-style-type: none;
`;

const Tool = styled.li`

`;

const Item = ({ ImgSrc, ImgAlt, Title, Description, Link, Tools }) => {
  return (
    <ItemWrapper>
      <ItemPoster><img src={ImgSrc} alt={ImgAlt} /></ItemPoster>
      <ItemContent>
        <ItemTitle>{Title}</ItemTitle>
        <ItemDescription>{Description}</ItemDescription>
        <LinkWrap href={Link}>{Link}</LinkWrap>
      </ItemContent>
    </ItemWrapper>
  );
};

Item.propTypes = {
  project: PropTypes.object,
};

export default Item;

