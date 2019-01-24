import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H3 } from '../Headings';
import ItemHover from './ItemHover';
import Col from '../../components/Col';

const Wrapper = styled.article`
  padding: 15px 0;
  margin: 0 15px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;
`;

const Hover = styled(ItemHover)`
  transition: all .35s ease; 
  ${Wrapper}:hover & {
    transform: translateY(-50%);
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

const Item = ({ children, imgSrc, imgAlt, description, tools }) => (
  <Col lg={4}>
    <Wrapper>
      <ImageContainer>
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
  </Col>
);

Item.propTypes = {
  children: PropTypes.any,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  description: PropTypes.string,
  tools: PropTypes.array,
};

export default Item;
